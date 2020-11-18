import { isAbsolute, join, relative, resolve, sep } from "path";
import { BindOption } from "typedoc";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";

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
      // Entry point index.html and global.html page.
      page.project.children
        .filter((child) => child.sources[0].fileName.startsWith(`clients${sep}`))
        .forEach((child) => {
          // "clients/client-s3" => "client-s3"
          const clientName = child.sources[0].fileName.split(sep)[1];
          const clientDocDir = clientDocsPattern.replace(/{{CLIENT}}/g, clientName);
          child.url = join(clientDocDir, "index.html");
          // @ts-ignore attach temporary flag.
          child._skipRendering = true;
        });
    }

    // Skip rendering empty landing page for each client.
    if (page.model._skipRendering) {
      page.preventDefault();
    }
  }
}
