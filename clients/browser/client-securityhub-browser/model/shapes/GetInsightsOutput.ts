import { _InsightList } from "./_InsightList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInsightsOutput: _Structure_ = {
  type: "structure",
  required: ["Insights"],
  members: {
    Insights: {
      shape: _InsightList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
