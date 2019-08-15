import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyGrantingServiceAccess: _Structure_ = {
  type: "structure",
  required: ["PolicyName", "PolicyType"],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    },
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    EntityType: {
      shape: {
        type: "string"
      }
    },
    EntityName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
