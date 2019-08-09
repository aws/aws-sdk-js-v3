import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlayerLatencyPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaximumIndividualPlayerLatencyMilliseconds: {
      shape: {
        type: "integer"
      }
    },
    PolicyDurationSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
