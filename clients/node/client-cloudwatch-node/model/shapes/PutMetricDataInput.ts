import { _MetricData } from "./_MetricData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutMetricDataInput: _Structure_ = {
  type: "structure",
  required: ["Namespace", "MetricData"],
  members: {
    Namespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MetricData: {
      shape: _MetricData
    }
  }
};
