import { _ObjectLockConfiguration } from "./_ObjectLockConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectLockConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    ObjectLockConfiguration: {
      shape: _ObjectLockConfiguration,
      locationName: "ObjectLockConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    },
    RequestPayer: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-payer"
    },
    Token: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-bucket-object-lock-token"
    },
    ContentMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-MD5"
    }
  },
  payload: "ObjectLockConfiguration"
};
