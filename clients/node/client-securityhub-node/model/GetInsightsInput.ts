import { _ArnList } from "./_ArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInsightsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InsightArns: {
      shape: _ArnList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
