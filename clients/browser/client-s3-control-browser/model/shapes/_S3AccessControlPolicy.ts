import { _S3AccessControlList } from "./_S3AccessControlList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3AccessControlPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessControlList: {
      shape: _S3AccessControlList
    },
    CannedAccessControlList: {
      shape: {
        type: "string"
      }
    }
  }
};
