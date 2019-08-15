import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainInfo: _Structure_ = {
  type: "structure",
  required: ["name", "status"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
