import { _RequestPaymentConfiguration } from "./_RequestPaymentConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBucketRequestPaymentInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "RequestPaymentConfiguration"],
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
    RequestPaymentConfiguration: {
      shape: _RequestPaymentConfiguration,
      locationName: "RequestPaymentConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    }
  },
  payload: "RequestPaymentConfiguration"
};
