import * as ts from "typescript";
import {
  Component,
  RendererComponent
} from "typedoc/dist/lib/output/components";
import {
  Reflection,
  ProjectReflection,
  ReflectionKind,
  DeclarationReflection
} from "typedoc/dist/lib/models/reflections";
import { NavigationItem } from "typedoc/dist/lib/output/models/NavigationItem";
import { PageEvent } from "typedoc/dist/lib/output/events";
import { ReferenceType } from "typedoc/dist/lib/models";

@Component({ name: "SdkClientTocPlugin" })
export class SdkClientTocPlugin extends RendererComponent {
  private commandToNavigationItems: Map<string, NavigationItem> = new Map();
  private commandsNavigationItem?: NavigationItem;
  private exceptionsNavigationItem?: NavigationItem;

  initialize() {
    // disable existing toc plugin
    const tocPlugin = <any>this.owner.application.renderer.getComponent("toc");
    this.owner.off(PageEvent.BEGIN, tocPlugin.onRendererBeginPage);

    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onRendererBeginPage
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
    while (
      model.constructor.name !== "ProjectReflection" &&
      !model.kindOf(ReflectionKind.SomeModule)
    ) {
      trail.unshift(model);
      model = model.parent;
    }

    const tocRestriction = this.owner.toc;
    page.toc = new NavigationItem(model.name);

    if (!model.parent && !trail.length) {
      this.commandsNavigationItem = new NavigationItem(
        "Commands",
        void 0,
        page.toc
      );
      this.exceptionsNavigationItem = new NavigationItem(
        "Exceptions",
        void 0,
        page.toc
      );
    }

    this.buildToc(model, trail, page.toc, tocRestriction);
  }

  private isCommand({ implementedTypes = [] }: DeclarationReflection): boolean {
    return (
      implementedTypes.length === 1 &&
      implementedTypes[0].type === "reference" &&
      (implementedTypes[0] as ReferenceType).name === "Command"
    );
  }

  private isException(model: DeclarationReflection): boolean {
    const extendedTypes = model.extendedTypes || [];
    return (
      extendedTypes.length === 1 &&
      extendedTypes[0].type === "reference" &&
      (extendedTypes[0] as ReferenceType).name === "ServiceException"
    );
  }

  private isUnion(model: DeclarationReflection): boolean {
    return model.type?.type === "union";
  }

  private isInputOrOutput(model: DeclarationReflection): boolean {
    return (
      model.kindString === "Interface" &&
      (model.name.endsWith("Input") || model.name.endsWith("Output"))
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
  buildToc(
    model: Reflection,
    trail: Reflection[],
    parent: NavigationItem,
    restriction?: string[]
  ) {
    const index = trail.indexOf(model);
    const children = model["children"] || [];

    if (index < trail.length - 1 && children.length > 40) {
      const child = trail[index + 1];
      const item = NavigationItem.create(child, parent, true);
      item.isInPath = true;
      item.isCurrent = false;
      this.buildToc(child, trail, item);
    } else {
      children.forEach((child: DeclarationReflection) => {
        if (
          restriction &&
          restriction.length > 0 &&
          restriction.indexOf(child.name) === -1
        ) {
          return;
        }

        if (child.kindOf(ReflectionKind.SomeModule)) {
          return;
        }

        if (trail.length) {
          const item = NavigationItem.create(child, parent, true);
          if (trail.indexOf(child) !== -1) {
            item.isInPath = true;
            item.isCurrent = trail[trail.length - 1] === child;
            this.buildToc(child, trail, item);
          }
          return;
        }

        if (this.isCommand(child)) {
          const item = NavigationItem.create(
            child,
            this.commandsNavigationItem,
            true
          );
          // create an entry for the command
          const commandName = child.name.toLowerCase();
          if (!this.commandToNavigationItems.get(commandName)) {
            this.commandToNavigationItems.set(commandName, item);
          }
        } else if (this.isException(child)) {
          const item = NavigationItem.create(
            child,
            this.exceptionsNavigationItem,
            true
          );
        } else if (
          this.isUnion(child) &&
          (child as any).type.types.every((type: ReferenceType) => {
            return (
              type.reflection &&
              this.isException(type.reflection as DeclarationReflection)
            );
          })
        ) {
          // get command from name
          const commandName =
            child.name.replace("ExceptionsUnion", "").toLowerCase() + "command";
          const item = NavigationItem.create(
            child,
            this.commandToNavigationItems.get(commandName),
            true
          );
        } else if (this.isInputOrOutput(child)) {
          // get command from name
          const commandName =
            child.name.replace(/Input|Output/, "").toLowerCase() + "command";
          const item = NavigationItem.create(
            child,
            this.commandToNavigationItems.get(commandName),
            true
          );
        } else if (child.name.startsWith("_")) {
          return;
        } else {
          const item = NavigationItem.create(child, parent, true);
          if (trail.indexOf(child) !== -1) {
            item.isInPath = true;
            item.isCurrent = trail[trail.length - 1] === child;
            this.buildToc(child, trail, item);
          }
        }
      });
    }
  }
}
