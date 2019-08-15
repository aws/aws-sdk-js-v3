import { _ObjectLockRetention } from "./_ObjectLockRetention";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectRetentionInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "Key"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Key"
    },
    Retention: {
      shape: _ObjectLockRetention,
      locationName: "Retention",
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
    VersionId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "versionId"
    },
    BypassGovernanceRetention: {
      shape: {
        type: "boolean"
      },
      location: "header",
      locationName: "x-amz-bypass-governance-retention"
    },
    ContentMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-MD5"
    }
  },
  payload: "Retention"
};
