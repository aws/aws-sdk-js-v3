import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePermissionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamUserArn: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    }
  }
};
