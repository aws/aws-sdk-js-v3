import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlockerDeclaration: _Structure_ = {
  type: "structure",
  required: ["name", "type"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
