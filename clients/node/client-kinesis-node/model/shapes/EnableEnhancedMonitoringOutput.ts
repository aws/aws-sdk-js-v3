import { _MetricsNameList } from "./_MetricsNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableEnhancedMonitoringOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentShardLevelMetrics: {
      shape: _MetricsNameList
    },
    DesiredShardLevelMetrics: {
      shape: _MetricsNameList
    }
  }
};
