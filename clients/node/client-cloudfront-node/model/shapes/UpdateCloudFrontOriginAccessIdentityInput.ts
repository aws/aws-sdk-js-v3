import { _CloudFrontOriginAccessIdentityConfig } from "./_CloudFrontOriginAccessIdentityConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCloudFrontOriginAccessIdentityInput: _Structure_ = {
  type: "structure",
  required: ["CloudFrontOriginAccessIdentityConfig", "Id"],
  members: {
    CloudFrontOriginAccessIdentityConfig: {
      shape: _CloudFrontOriginAccessIdentityConfig,
      locationName: "CloudFrontOriginAccessIdentityConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    IfMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "If-Match"
    }
  },
  payload: "CloudFrontOriginAccessIdentityConfig"
};
