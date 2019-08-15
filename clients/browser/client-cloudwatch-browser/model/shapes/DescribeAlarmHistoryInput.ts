import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlarmHistoryInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlarmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HistoryItemType: {
      shape: {
        type: "string"
      }
    },
    StartDate: {
      shape: {
        type: "timestamp"
      }
    },
    EndDate: {
      shape: {
        type: "timestamp"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
