import { _HistoryRecordSet } from "./_HistoryRecordSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HistoryRecords: {
      shape: _HistoryRecordSet,
      locationName: "historyRecordSet"
    },
    LastEvaluatedTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "lastEvaluatedTime"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    FleetId: {
      shape: {
        type: "string"
      },
      locationName: "fleetId"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    }
  }
};
