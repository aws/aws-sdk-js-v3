import { _Document } from "./_Document";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectDocumentTextInput: _Structure_ = {
  type: "structure",
  required: ["Document"],
  members: {
    Document: {
      shape: _Document
    }
  }
};
