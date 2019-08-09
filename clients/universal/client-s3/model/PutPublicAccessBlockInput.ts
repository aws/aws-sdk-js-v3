import { _PublicAccessBlockConfiguration } from "./_PublicAccessBlockConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPublicAccessBlockInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "PublicAccessBlockConfiguration"],
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
    PublicAccessBlockConfiguration: {
      shape: _PublicAccessBlockConfiguration,
      locationName: "PublicAccessBlockConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    }
  },
  payload: "PublicAccessBlockConfiguration"
};
