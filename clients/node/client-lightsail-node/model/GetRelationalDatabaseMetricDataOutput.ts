import { _MetricDatapointList } from "./_MetricDatapointList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseMetricDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    metricName: {
      shape: {
        type: "string"
      }
    },
    metricData: {
      shape: _MetricDatapointList
    }
  }
};
