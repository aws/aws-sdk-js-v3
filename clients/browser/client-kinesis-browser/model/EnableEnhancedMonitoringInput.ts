import { _MetricsNameList } from "./_MetricsNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableEnhancedMonitoringInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "ShardLevelMetrics"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShardLevelMetrics: {
      shape: _MetricsNameList
    }
  }
};
