import { readFileSync } from "fs";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";

/**
 * Correct the package name in the navigator.
 */
@Component({ name: "SdkClientRenameProject" })
export class SdkClientRenameProjectPlugin extends RendererComponent {
  initialize() {
    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.onRenderedBegin,
    });
  }

  onRenderedBegin(event: RendererEvent) {
    const { fullFileName } = event.project.files.filter((sourceFile) =>
      sourceFile.fileName.endsWith("/package.json")
    )[0];
    const { name } = JSON.parse(readFileSync(fullFileName).toString());
    event.project.name = name;
  }
}
