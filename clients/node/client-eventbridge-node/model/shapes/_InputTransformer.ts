import { _TransformerPaths } from "./_TransformerPaths";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputTransformer: _Structure_ = {
  type: "structure",
  required: ["InputTemplate"],
  members: {
    InputPathsMap: {
      shape: _TransformerPaths
    },
    InputTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
