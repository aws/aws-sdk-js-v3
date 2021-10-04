import { dirname } from "path";
import { ReferenceType } from "typedoc/dist/lib/models";
import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
} from "typedoc/dist/lib/models/reflections";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
import { NavigationItem } from "typedoc/dist/lib/output/models/NavigationItem";

import { getCurrentClientDirectory } from "./utils";

/**
 * Group the ToC for easier observability.
 */
@Component({ name: "SdkClientTocPlugin" })
export class SdkClientTocPlugin extends RendererComponent {
  private commandsNavigationItem?: NavigationItem;
  private clientsNavigationItem?: NavigationItem;
  private paginatorsNavigationItem?: NavigationItem;
  private waitersNavigationItem?: NavigationItem;
  private clientDir?: string;

  initialize() {
    // disable existing toc plugin
    const tocPlugin = <any>this.owner.application.renderer.getComponent("toc");
    this.owner.off(PageEvent.BEGIN, tocPlugin.onRendererBeginPage);

    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onRendererBeginPage,
    });
  }

  /**
   * Generates a table of contents for a page.
   * @param page Contains project details and contextual data about the page being rendered.
   */
  private onRendererBeginPage(page: PageEvent) {
    let model = page.model;
    if (!model.constructor.name.endsWith("Reflection")) {
      return;
    }

    const trail: Reflection[] = [];
    while (model.constructor.name !== "ProjectReflection" && !model.kindOf(ReflectionKind.SomeModule)) {
      trail.unshift(model);
      model = model.parent;
    }

    const tocRestriction = this.owner.toc;
    page.toc = new NavigationItem(model.name);

    if (!model.parent && !trail.length) {
      this.clientsNavigationItem = new NavigationItem("Clients", void 0, page.toc);
      this.commandsNavigationItem = new NavigationItem("Commands", void 0, page.toc);
      this.paginatorsNavigationItem = new NavigationItem("Paginators", void 0, page.toc);
      this.waitersNavigationItem = new NavigationItem("Waiters", void 0, page.toc);
    }

    this.buildToc(model, trail, page.toc, tocRestriction);
  }

  // Confirm declaration comes from the same folder as the client class
  private belongsToClientPackage(model: DeclarationReflection): boolean {
    return this.clientDir && model.sources?.[0].file?.fullFileName.indexOf(this.clientDir) === 0;
  }

  private isClient(model: DeclarationReflection): boolean {
    const { extendedTypes = [] } = model;
    return (
      model.kindOf(ReflectionKind.Class) &&
      model.getFullName() !== "Client" && // Exclude the Smithy Client class.
      (model.name.endsWith("Client") /* Modular client like S3Client */ ||
        extendedTypes.filter((reference) => (reference as ReferenceType).name === `${model.name}Client`).length > 0) &&
      /* Filter out other client classes that not sourced from the same directory as current client. e.g. STS, SSO */
      this.belongsToClientPackage(model)
    );
  }

  private isCommand(model: DeclarationReflection): boolean {
    return (
      model.kindOf(ReflectionKind.Class) &&
      model.name.endsWith("Command") &&
      // model.children?.some((child) => child.name === "resolveMiddleware") &&
      this.belongsToClientPackage(model)
    );
  }

  private isPaginator(model: DeclarationReflection): boolean {
    return (
      model.name.startsWith("paginate") && model.kindOf(ReflectionKind.Function) && this.belongsToClientPackage(model)
    );
  }

  private isInputOrOutput(model: DeclarationReflection): boolean {
    return (
      model.kindOf(ReflectionKind.Interface) &&
      (model.name.endsWith("CommandInput") || model.name.endsWith("CommandOutput")) &&
      this.belongsToClientPackage(model)
    );
  }

  private isWaiter(model: DeclarationReflection): boolean {
    return (
      model.name.startsWith("waitFor") && model.kindOf(ReflectionKind.Function) && this.belongsToClientPackage(model)
    );
  }

  /**
   * Create a toc navigation item structure.
   *
   * @param model   The models whose children should be written to the toc.
   * @param trail   Defines the active trail of expanded toc entries.
   * @param parent  The parent [[NavigationItem]] the toc should be appended to.
   * @param restriction  The restricted table of contents.
   */
  buildToc(model: Reflection, trail: Reflection[], parent: NavigationItem, restriction?: string[]) {
    const index = trail.indexOf(model);
    const children = model["children"] || [];
    if (!this.clientDir) this.clientDir = this.loadClientDir(model);

    if (index < trail.length - 1 && children.length > 40) {
      const child = trail[index + 1];
      const item = NavigationItem.create(child, parent, true);
      item.isInPath = true;
      item.isCurrent = false;
      this.buildToc(child, trail, item);
    } else {
      children.forEach((child: DeclarationReflection) => {
        if (restriction && restriction.length > 0 && !restriction.includes(child.name)) {
          return;
        }

        if (child.kindOf(ReflectionKind.SomeModule)) {
          return;
        }

        if (this.isClient(child)) {
          NavigationItem.create(child, this.clientsNavigationItem, true);
        } else if (this.isCommand(child)) {
          NavigationItem.create(child, this.commandsNavigationItem, true);
        } else if (this.isPaginator(child)) {
          NavigationItem.create(child, this.paginatorsNavigationItem, true);
        } else if (this.isInputOrOutput(child)) {
          NavigationItem.create(child, this.commandsNavigationItem, true);
        } else if (this.isWaiter(child)) {
          NavigationItem.create(child, this.waitersNavigationItem, true);
        } else {
          const item = NavigationItem.create(child, parent, true);
          if (trail.includes(child)) {
            item.isInPath = true;
            item.isCurrent = trail[trail.length - 1] === child;
            this.buildToc(child, trail, item);
          }
        }
      });
      // Group commands and input/output interface of each command.
      this.commandsNavigationItem?.children.sort((childA, childB) => childA.title.localeCompare(childB.title));
    }
  }

  private loadClientDir(model: Reflection) {
    let projectModel = model as any as ProjectReflection;
    while (projectModel.constructor.name !== "ProjectReflection" && !projectModel.kindOf(ReflectionKind.SomeModule)) {
      projectModel = projectModel.parent as ProjectReflection;
    }
    const clientsDirectory = getCurrentClientDirectory({ project: projectModel as ProjectReflection });
    return dirname(
      dirname(clientsDirectory?.directories.src.files.find((file) => file.name.endsWith("Client.ts")).fullFileName)
    );
  }
}
