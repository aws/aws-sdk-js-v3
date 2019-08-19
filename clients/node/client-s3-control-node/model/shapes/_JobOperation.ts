import { _LambdaInvokeOperation } from "./_LambdaInvokeOperation";
import { _S3CopyObjectOperation } from "./_S3CopyObjectOperation";
import { _S3SetObjectAclOperation } from "./_S3SetObjectAclOperation";
import { _S3SetObjectTaggingOperation } from "./_S3SetObjectTaggingOperation";
import { _S3InitiateRestoreObjectOperation } from "./_S3InitiateRestoreObjectOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LambdaInvoke: {
      shape: _LambdaInvokeOperation
    },
    S3PutObjectCopy: {
      shape: _S3CopyObjectOperation
    },
    S3PutObjectAcl: {
      shape: _S3SetObjectAclOperation
    },
    S3PutObjectTagging: {
      shape: _S3SetObjectTaggingOperation
    },
    S3InitiateRestoreObject: {
      shape: _S3InitiateRestoreObjectOperation
    }
  }
};
