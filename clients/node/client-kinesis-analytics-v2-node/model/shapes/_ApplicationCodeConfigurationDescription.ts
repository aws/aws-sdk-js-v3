import { _CodeContentDescription } from "./_CodeContentDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationCodeConfigurationDescription: _Structure_ = {
  type: "structure",
  required: ["CodeContentType"],
  members: {
    CodeContentType: {
      shape: {
        type: "string"
      }
    },
    CodeContentDescription: {
      shape: _CodeContentDescription
    }
  }
};
