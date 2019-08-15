import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePendingAggregationRequestInput: _Structure_ = {
  type: "structure",
  required: ["RequesterAccountId", "RequesterAwsRegion"],
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
