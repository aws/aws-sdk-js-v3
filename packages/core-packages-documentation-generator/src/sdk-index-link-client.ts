import { sep } from "path";
import { BindOption } from "typedoc";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";

@Component({ name: "SdkIndexLinkClientPlugin" })
export class SdkIndexLinkClientPlugin extends RendererComponent {
  @BindOption("out")
  out!: string;
  /**
   * The path pattern denotes the location of individual service client doc.
   * "{{CLIENT}}" will be replaced with the client name.
   * For example: `path/{{CLIENT}}/docs`
   */
  @BindOption("clientsDocPath")
  clientsDocPath!: string;

  initialize() {
    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onPageBegin,
    });
  }

  onPageBegin(page: PageEvent) {
    const prefix = new Array(this.out.split(sep).length).fill("..").join(sep);
    if (page.model === page.project) {
      // Entry point index.html and global.html page.
      page.project.children
        .filter((child) => child.sources[0].fileName.startsWith(`clients${sep}`))
        .forEach((child) => {
          // "clients/client-s3" => "client-s3"
          const clientName = child.sources[0].fileName.split(sep)[1];
          const clientDocDir = this.clientsDocPath.replace(/{{CLIENT}}/g, clientName);
          child.url = [prefix, clientDocDir, "index.html"].join(sep);
          //@ts-ignore attach temporary flag
          child._skipRendering = true;
        });
    }
    // Skip rendering empty landing page for each client
    if (page.model._skipRendering) {
      page.preventDefault();
    }
  }
}
