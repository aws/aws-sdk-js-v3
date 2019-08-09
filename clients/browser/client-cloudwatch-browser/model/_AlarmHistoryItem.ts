import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlarmHistoryItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlarmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    HistoryItemType: {
      shape: {
        type: "string"
      }
    },
    HistorySummary: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HistoryData: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
