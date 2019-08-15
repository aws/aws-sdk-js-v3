import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCustomActionTypeInput: _Structure_ = {
  type: "structure",
  required: ["category", "provider", "version"],
  members: {
    category: {
      shape: {
        type: "string"
      }
    },
    provider: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
