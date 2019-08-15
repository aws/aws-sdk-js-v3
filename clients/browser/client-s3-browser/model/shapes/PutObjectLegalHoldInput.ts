import { _ObjectLockLegalHold } from "./_ObjectLockLegalHold";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectLegalHoldInput: _Structure_ = {
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
    LegalHold: {
      shape: _ObjectLockLegalHold,
      locationName: "LegalHold",
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
    ContentMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-MD5"
    }
  },
  payload: "LegalHold"
};
