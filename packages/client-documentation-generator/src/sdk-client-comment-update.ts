import { Converter } from "typedoc/dist/lib/converter";
import { Component, ConverterComponent } from "typedoc/dist/lib/converter/components";
import { Context } from "typedoc/dist/lib/converter/context";
import { getRawComment, parseComment } from "typedoc/dist/lib/converter/factories/comment";
import { Reflection } from "typedoc/dist/lib/models/reflections";
import ts from "typescript";

/**
 * Best effort make the service docs markdown looks better.
 */
@Component({ name: "SdkClientCommentUpdatePlugin" })
export class SdkClientCommentUpdatePlugin extends ConverterComponent {
  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_CREATE_DECLARATION]: this.onDeclaration,
    });
  }

  private onDeclaration(context: Context, reflection: Reflection, node?: ts.Node) {
    if (!node) return;
    const rawComment = getRawComment(node);
    if (!rawComment) return;
    const comment = parseComment(this.cleanEmptyCommentLines(rawComment));
    reflection.comment = comment;
  }

  /**
   * Update documentation block to exclude empty lines.
   */
  private cleanEmptyCommentLines(comment: string): string {
    return comment.startsWith("/*") && comment.endsWith("*/")
      ? comment
          .split("\n")
          .filter((line) => line.substr(line.indexOf("*") + 1).trim().length !== 0)
          .join("\n")
      : comment;
  }
}
