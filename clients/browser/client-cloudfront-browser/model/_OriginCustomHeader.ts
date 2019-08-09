import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginCustomHeader: _Structure_ = {
  type: "structure",
  required: ["HeaderName", "HeaderValue"],
  members: {
    HeaderName: {
      shape: {
        type: "string"
      }
    },
    HeaderValue: {
      shape: {
        type: "string"
      }
    }
  }
};
