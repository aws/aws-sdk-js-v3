import { readdir } from "fs";
import { isAbsolute, join, relative, resolve, sep } from "path";
import {
  BindOption,
  Context,
  Converter,
  DeclarationReflection,
  Logger,
  Options,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
  Renderer,
} from "typedoc";

const isClientModel = (model: Reflection | undefined) =>
  model?.sources?.[0]?.fullFileName.includes(`${sep}clients${sep}`);

export class SdkIndexLinkClientPlugin {
  @BindOption("out")
  readonly outputDirectory: string;

  /**
   * The path pattern denotes the location of individual service client doc.
   * "{{CLIENT}}" will be replaced with the client name.
   * For example: `path/{{CLIENT}}/docs` will target service docs at `path/service/docs`
   */
  @BindOption("clientDocs")
  readonly clientDocs: string;

  @BindOption("defaultGroup")
  readonly defaultGroup: string;

  constructor(public readonly options: Options, public readonly logger: Logger, private readonly renderer: Renderer) {
    this.renderer.application.converter.on(Converter.EVENT_END, this.onConverterEnd);
    this.renderer.on(Renderer.EVENT_BEGIN_PAGE, this.onPageBegin);
  }

  private onConverterEnd = async (context: Context): Promise<void> => {
    const project = context.project;

    if (!project.groups) {
      project.groups = [];
    }

    let group = project.groups.find((value) => value.title === this.defaultGroup);

    if (!group) {
      group = new ReflectionGroup(this.defaultGroup);
      project.groups.push(group);
    }

    const modules = project.getChildrenByKind(ReflectionKind.SomeModule);

    await this.registerClients(project, modules);

    group.categories = this.defineCategories(group, modules);
  };

  private onPageBegin = (page: PageEvent<Reflection>) => {
    // Skip rendering empty landing page for each client.
    if (page.model.flags.includes("SkipRendering")) {
      page.preventDefault();
    }

    if (page.model.isProject()) {
      const group = page.model.groups.find((value) => value.title === this.defaultGroup);
      const clientsCategory = group.categories.find((value) => value.title === "Clients");

      for (const child of clientsCategory.children || []) {
        child.url = `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/${child.originalName}/`;
        child.name = `@aws-sdk/${child.originalName.replace("client-", "")}`;
      }
    }
  };

  private async registerClients(project: ProjectReflection, modules: DeclarationReflection[]): Promise<void> {
    return new Promise((resolvePromise, rejectPromise) => {
      const clientPath = resolve("./clientDocs/clients");
      readdir(clientPath, (err, clientFiles) => {
        if (err) rejectPromise(err);

        clientFiles.forEach((clientName) => {
          if (clientName.includes("client") && !clientName.includes("documentation")) {
            const clientDeclaration = new DeclarationReflection(clientName, ReflectionKind.Module, project);
            project.registerReflection(clientDeclaration);
            modules.push(clientDeclaration);
          }
        });
        resolvePromise();
      });
    });
  }

  /**
   * Define navigation categories in Client, Packages and Libraries sections. It will update the
   * supplied categories array.
   *
   * @param group   The parent group where the categories will be placed under.
   * @param reflections   The reflections that should be categorized.
   */
  private defineCategories(group: ReflectionGroup, reflections: DeclarationReflection[]): ReflectionCategory[] {
    const categories = group.categories || [];
    if (this.isCategorized(categories)) return group.categories;

    const clients = new ReflectionCategory("Clients");
    const packages = new ReflectionCategory("Packages");
    const libs = new ReflectionCategory("Libraries");
    reflections.forEach((reflection: DeclarationReflection) => {
      if (this.isClient(reflection)) {
        clients.children.push(reflection);
        reflection.flags.includes("SkipRendering");
      } else if (this.isLib(reflection)) {
        libs.children.push(reflection);
      } else {
        packages.children.push(reflection);
      }
    });

    categories.push(...[clients, libs, packages]);
    return categories;
  }

  private isCategorized(categories: ReflectionCategory[]): boolean {
    const childrenNames = categories.map((child) => child.title);
    return (
      childrenNames.includes("Clients") && childrenNames.includes("Packages") && childrenNames.includes("Libraries")
    );
  }

  private isClient(item: DeclarationReflection): boolean {
    return isClientModel(item) || item.name.includes("client-");
  }

  private isLib(item: DeclarationReflection): boolean {
    return item?.sources?.[0].fileName.startsWith(`lib${sep}`);
  }
}
