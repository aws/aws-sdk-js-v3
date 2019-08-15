import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingAggregationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RequesterAccountId: {
      shape: {
        type: "string"
      }
    },
    RequesterAwsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
