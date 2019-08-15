import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTimeSeriesServiceStatisticsInput: _Structure_ = {
  type: "structure",
  required: ["StartTime", "EndTime"],
  members: {
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EntitySelectorExpression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Period: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
