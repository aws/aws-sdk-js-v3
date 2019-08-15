import { _LogGroupNames } from "./_LogGroupNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartQueryInput: _Structure_ = {
  type: "structure",
  required: ["startTime", "endTime", "queryString"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logGroupNames: {
      shape: _LogGroupNames
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
    queryString: {
      shape: {
        type: "string"
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
