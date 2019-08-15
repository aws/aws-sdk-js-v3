import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCrossAccountAccessRoleOutput: _Structure_ = {
  type: "structure",
  required: ["roleArn", "valid", "registeredAt"],
  members: {
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    valid: {
      shape: {
        type: "boolean"
      }
    },
    registeredAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
