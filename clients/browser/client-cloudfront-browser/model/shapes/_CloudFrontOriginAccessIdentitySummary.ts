import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudFrontOriginAccessIdentitySummary: _Structure_ = {
  type: "structure",
  required: ["Id", "S3CanonicalUserId", "Comment"],
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
    Comment: {
      shape: {
        type: "string"
      }
    }
  }
};
