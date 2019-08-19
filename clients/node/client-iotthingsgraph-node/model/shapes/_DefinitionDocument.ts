import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefinitionDocument: _Structure_ = {
  type: "structure",
  required: ["language", "text"],
  members: {
    language: {
      shape: {
        type: "string"
      }
    },
    text: {
      shape: {
        type: "string"
      }
    }
  }
};
