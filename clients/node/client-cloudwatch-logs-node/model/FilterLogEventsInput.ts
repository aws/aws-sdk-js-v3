import { _InputLogStreamNames } from "./_InputLogStreamNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const FilterLogEventsInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logStreamNames: {
      shape: _InputLogStreamNames
    },
    logStreamNamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startTime: {
      shape: {
        type: "integer"
      }
    },
    endTime: {
      shape: {
        type: "integer"
      }
    },
    filterPattern: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    interleaved: {
      shape: {
        type: "boolean"
      }
    }
  }
};
