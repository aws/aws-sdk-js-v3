import { _TableStatisticsList } from "./_TableStatisticsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTableStatisticsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    TableStatistics: {
      shape: _TableStatisticsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
