import { _DocumentDefaultVersionDescription } from "./_DocumentDefaultVersionDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDocumentDefaultVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: _DocumentDefaultVersionDescription
    }
  }
};
