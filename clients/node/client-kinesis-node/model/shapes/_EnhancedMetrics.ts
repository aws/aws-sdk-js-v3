import { _MetricsNameList } from "./_MetricsNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnhancedMetrics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ShardLevelMetrics: {
      shape: _MetricsNameList
    }
  }
};
