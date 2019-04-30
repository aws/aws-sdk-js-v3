import { _VersioningConfiguration } from "./_VersioningConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBucketVersioningInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "VersioningConfiguration"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    ContentMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-MD5"
    },
    MFA: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-mfa"
    },
    VersioningConfiguration: {
      shape: _VersioningConfiguration,
      locationName: "VersioningConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    }
  },
  payload: "VersioningConfiguration"
};
