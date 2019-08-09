import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsIamAccessKeyDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
