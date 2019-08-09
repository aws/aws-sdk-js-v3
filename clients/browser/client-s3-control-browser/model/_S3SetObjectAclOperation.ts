import { _S3AccessControlPolicy } from "./_S3AccessControlPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3SetObjectAclOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessControlPolicy: {
      shape: _S3AccessControlPolicy
    }
  }
};
