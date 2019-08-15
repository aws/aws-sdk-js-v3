import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIdentityProviderInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "ProviderName"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
