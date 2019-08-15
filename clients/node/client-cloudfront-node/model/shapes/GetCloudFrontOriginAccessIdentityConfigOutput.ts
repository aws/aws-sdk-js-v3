import { _CloudFrontOriginAccessIdentityConfig } from "./_CloudFrontOriginAccessIdentityConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCloudFrontOriginAccessIdentityConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudFrontOriginAccessIdentityConfig: {
      shape: _CloudFrontOriginAccessIdentityConfig
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "CloudFrontOriginAccessIdentityConfig"
};
