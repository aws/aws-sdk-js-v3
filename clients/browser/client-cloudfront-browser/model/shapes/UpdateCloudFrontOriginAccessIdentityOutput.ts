import { _CloudFrontOriginAccessIdentity } from "./_CloudFrontOriginAccessIdentity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCloudFrontOriginAccessIdentityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudFrontOriginAccessIdentity: {
      shape: _CloudFrontOriginAccessIdentity
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "CloudFrontOriginAccessIdentity"
};
