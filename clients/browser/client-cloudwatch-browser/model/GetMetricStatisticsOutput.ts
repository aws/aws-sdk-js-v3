import { _Datapoints } from "./_Datapoints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricStatisticsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Label: {
      shape: {
        type: "string"
      }
    },
    Datapoints: {
      shape: _Datapoints
    }
  }
};
