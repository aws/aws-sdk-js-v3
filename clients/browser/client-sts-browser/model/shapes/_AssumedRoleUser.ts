import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssumedRoleUser: _Structure_ = {
  type: "structure",
  required: ["AssumedRoleId", "Arn"],
  members: {
    AssumedRoleId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
