import { _HistoryRecords } from "./_HistoryRecords";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotFleetRequestHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HistoryRecords: {
      shape: _HistoryRecords,
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
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    }
  }
};
