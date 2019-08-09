import { _GroupDefinitions } from "./_GroupDefinitions";
import { _ResultsByTime } from "./_ResultsByTime";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCostAndUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextPageToken: {
      shape: {
        type: "string"
      }
    },
    GroupDefinitions: {
      shape: _GroupDefinitions
    },
    ResultsByTime: {
      shape: _ResultsByTime
    }
  }
};
