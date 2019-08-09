import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SessionManagerOutputUrl: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3OutputUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CloudWatchOutputUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
