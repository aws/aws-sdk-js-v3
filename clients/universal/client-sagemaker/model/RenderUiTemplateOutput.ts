import { _RenderingErrorList } from "./_RenderingErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RenderUiTemplateOutput: _Structure_ = {
  type: "structure",
  required: ["RenderedContent", "Errors"],
  members: {
    RenderedContent: {
      shape: {
        type: "string"
      }
    },
    Errors: {
      shape: _RenderingErrorList
    }
  }
};
