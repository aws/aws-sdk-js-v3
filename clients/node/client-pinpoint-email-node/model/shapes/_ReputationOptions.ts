import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReputationOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReputationMetricsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    LastFreshStart: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
