import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudFrontOriginAccessIdentityConfig: _Structure_ = {
  type: "structure",
  required: ["CallerReference", "Comment"],
  members: {
    CallerReference: {
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
