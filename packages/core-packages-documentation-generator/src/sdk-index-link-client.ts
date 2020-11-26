import { isAbsolute, join, relative, resolve, sep } from "path";
import { BindOption } from "typedoc";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
import { NavigationItem } from "typedoc/dist/lib/output/models/NavigationItem";

const PROJECT_ROOT = join(__dirname, "..", "..", "..", "..");
@Component({ name: "SdkIndexLinkClientPlugin" })
export class SdkIndexLinkClientPlugin extends RendererComponent {
  @BindOption("out")
  readonly out!: string;
  /**
   * The path pattern denotes the location of individual service client doc.
   * "{{CLIENT}}" will be replaced with the client name.
   * For example: `path/{{CLIENT}}/docs` will target s3 docs at `path/client-s3/docs`
   */
  @BindOption("clientDocs")
  readonly clientDocs!: string;

  initialize() {
    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onPageBegin,
    });
  }

  onPageBegin(page: PageEvent) {
    const out = isAbsolute(this.out) ? this.out : resolve(PROJECT_ROOT, this.out);
    const clientDocs = isAbsolute(this.clientDocs) ? this.clientDocs : resolve(PROJECT_ROOT, this.clientDocs);
    // Get relative path from core packages doc to clients' doc.
    const clientDocsPattern = relative(out, clientDocs);

    if (page.model === page.project) {
      page.navigation = this.groupNavigation(page.navigation);

      page.navigation.children.filter(this.isClient).forEach((child) => {
        // "clients/client-s3" => "client-s3"
        const clientName = child.reflection.sources[0].fileName.split(sep)[1];
        const clientDocDir = clientDocsPattern.replace(/{{CLIENT}}/g, clientName);
        child.url = join(clientDocDir, "index.html");
        // @ts-ignore attach temporary flag.
        child.reflection._skipRendering = true;
      });
    }

    // Skip rendering empty landing page for each client.
    if (page.model._skipRendering) {
      page.preventDefault();
    }
  }

  /**
   * Group navigation in Client, Packages and Libraries sections. It will update the
   * supplied navigation object;
   */
  private groupNavigation(navigation: NavigationItem): NavigationItem {
    if (this.isGrouped(navigation)) return navigation;

    const modules = navigation.children.filter((child) => child?.reflection?.sources[0].fileName);
    const clients: NavigationItem[] = [];
    const packages: NavigationItem[] = [];
    const libs: NavigationItem[] = [];
    const isLib = (item: NavigationItem) => item?.reflection?.sources[0].fileName.startsWith(`lib${sep}`);
    modules.forEach((item) => {
      if (this.isClient(item)) {
        clients.push(item);
      } else if (isLib(item)) {
        libs.push(item);
      } else {
        packages.push(item);
      }
    });

    navigation.children = [
      new NavigationItem("Clients"),
      ...clients,
      new NavigationItem("Libraries"),
      ...libs,
      new NavigationItem("Packages"),
      ...packages,
    ];
    return navigation;
  }

  private isGrouped(navigation: NavigationItem): boolean {
    const childrenNames = navigation.children.map((child) => child.title);
    return (
      childrenNames.includes("Clients") && childrenNames.includes("Packages") && childrenNames.includes("Libraries")
    );
  }

  private isClient(item: NavigationItem): boolean {
    return item?.reflection?.sources[0].fileName.startsWith(`clients${sep}`);
  }
}
