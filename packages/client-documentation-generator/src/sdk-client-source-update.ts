import { sep } from "path";
import { Converter } from "typedoc/dist/lib/converter";
import { Component, ConverterComponent } from "typedoc/dist/lib/converter/components";
import { Context } from "typedoc/dist/lib/converter/context";
import { SourceFile } from "typedoc/dist/lib/models";
import * as ts from "typescript";

const basePathsToIgnore = ["model"];

@Component({ name: "SdkClientSourceUpdatePlugin" })
export class SdkClientSourceUpdatePlugin extends ConverterComponent {
  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_BEGIN]: this.onBegin,
    });
  }

  /**
   * Purge source files we wish to ignore.
   * @param context
   */
  onBegin(context: Context) {
    const program = context.program;
    const basePath = (program as any).getCommonSourceDirectory();
    const sourceFiles: ts.SourceFile[] = <any>program.getSourceFiles();
    for (let i = sourceFiles.length - 1; i >= 0; i--) {
      const sourceFile = sourceFiles[i];
      if (sourceFile.fileName.indexOf(basePath) !== 0) {
        continue;
      }

      let localPath = sourceFile.fileName.substring(basePath.length);
      localPath = localPath.split(sep)[0];
      if (!basePathsToIgnore.every((basePath) => basePath !== localPath)) {
        // the file should be ignored, so remove it
        sourceFiles.splice(i, 1);
      }
    }
  }
}
