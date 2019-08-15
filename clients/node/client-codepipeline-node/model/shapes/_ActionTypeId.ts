import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionTypeId: _Structure_ = {
  type: "structure",
  required: ["category", "owner", "provider", "version"],
  members: {
    category: {
      shape: {
        type: "string"
      }
    },
    owner: {
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
