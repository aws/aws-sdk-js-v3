import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Group: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrincipalId: {
      shape: {
        type: "string"
      }
    }
  }
};
