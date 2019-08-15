import { _CloudFrontOriginAccessIdentityConfig } from "./_CloudFrontOriginAccessIdentityConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudFrontOriginAccessIdentity: _Structure_ = {
  type: "structure",
  required: ["Id", "S3CanonicalUserId"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    S3CanonicalUserId: {
      shape: {
        type: "string"
      }
    },
    CloudFrontOriginAccessIdentityConfig: {
      shape: _CloudFrontOriginAccessIdentityConfig
    }
  }
};
