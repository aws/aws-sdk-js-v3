import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchBufferingHints: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IntervalInSeconds: {
      shape: {
        type: "integer",
        min: 60
      }
    },
    SizeInMBs: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
