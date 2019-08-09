import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FederatedUser: _Structure_ = {
  type: "structure",
  required: ["FederatedUserId", "Arn"],
  members: {
    FederatedUserId: {
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
