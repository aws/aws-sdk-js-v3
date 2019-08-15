import { _CreateBucketConfiguration } from "./_CreateBucketConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBucketInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    ACL: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-acl"
    },
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    CreateBucketConfiguration: {
      shape: _CreateBucketConfiguration,
      locationName: "CreateBucketConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    },
    GrantFullControl: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-full-control"
    },
    GrantRead: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-read"
    },
    GrantReadACP: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-read-acp"
    },
    GrantWrite: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-write"
    },
    GrantWriteACP: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-write-acp"
    },
    ObjectLockEnabledForBucket: {
      shape: {
        type: "boolean"
      },
      location: "header",
      locationName: "x-amz-bucket-object-lock-enabled"
    }
  },
  payload: "CreateBucketConfiguration"
};
