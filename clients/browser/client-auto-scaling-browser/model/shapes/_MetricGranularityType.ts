import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricGranularityType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Granularity: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
