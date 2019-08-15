import { _CodeContent } from "./_CodeContent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationCodeConfiguration: _Structure_ = {
  type: "structure",
  required: ["CodeContentType"],
  members: {
    CodeContent: {
      shape: _CodeContent
    },
    CodeContentType: {
      shape: {
        type: "string"
      }
    }
  }
};
