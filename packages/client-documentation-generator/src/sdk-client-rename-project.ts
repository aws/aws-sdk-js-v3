import { readFileSync } from "fs";
import { Component, RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";

import { getCurrentClientDirectory } from "./utils";

/**
 * Correct the package name in the navigator.
 */
@Component({ name: "SdkClientRenameProject" })
export class SdkClientRenameProjectPlugin extends RendererComponent {
  private projectName: string | undefined = undefined;
  initialize() {
    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.onRenderedBegin,
    });
  }

  onRenderedBegin(event: RendererEvent) {
    if (!this.projectName) {
      const clientDirectory = getCurrentClientDirectory(event);
      const metadataDir = clientDirectory.files.filter((sourceFile) =>
        sourceFile.fileName.endsWith("/package.json")
      )?.[0]?.fullFileName;
      const { name } = metadataDir || JSON.parse(readFileSync(metadataDir).toString());
      const serviceIdReflection = clientDirectory.directories.src.files
        ?.filter((sourceFile) => sourceFile.fileName.endsWith("/runtimeConfig.shared.ts"))?.[0]
        .reflections.filter((reflection) => reflection.name === "serviceId")?.[0];
      this.projectName = serviceIdReflection /* serviceIdReflection.defaultValue looks like '"S3"' */
        ? `${(serviceIdReflection as any).defaultValue.match(/"(.*)"/)[1]} Client - AWS SDK for JavaScript v3`
        : name;
    }
    event.project.name = this.projectName;
  }
}
