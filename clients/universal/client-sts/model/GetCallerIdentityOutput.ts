import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCallerIdentityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserId: {
      shape: {
        type: "string"
      }
    },
    Account: {
      shape: {
        type: "string"
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
