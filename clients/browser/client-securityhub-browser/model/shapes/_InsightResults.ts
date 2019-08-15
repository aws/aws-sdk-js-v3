import { _InsightResultValueList } from "./_InsightResultValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InsightResults: _Structure_ = {
  type: "structure",
  required: ["InsightArn", "GroupByAttribute", "ResultValues"],
  members: {
    InsightArn: {
      shape: {
        type: "string"
      }
    },
    GroupByAttribute: {
      shape: {
        type: "string"
      }
    },
    ResultValues: {
      shape: _InsightResultValueList
    }
  }
};
