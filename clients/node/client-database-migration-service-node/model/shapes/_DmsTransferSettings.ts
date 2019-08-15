import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DmsTransferSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceAccessRoleArn: {
      shape: {
        type: "string"
      }
    },
    BucketName: {
      shape: {
        type: "string"
      }
    }
  }
};
