import { _CloudFrontOriginAccessIdentityConfig } from "./_CloudFrontOriginAccessIdentityConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCloudFrontOriginAccessIdentityInput: _Structure_ = {
  type: "structure",
  required: ["CloudFrontOriginAccessIdentityConfig"],
  members: {
    CloudFrontOriginAccessIdentityConfig: {
      shape: _CloudFrontOriginAccessIdentityConfig,
      locationName: "CloudFrontOriginAccessIdentityConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "CloudFrontOriginAccessIdentityConfig"
};
