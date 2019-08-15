import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InsightResultValue: _Structure_ = {
  type: "structure",
  required: ["GroupByAttributeValue", "Count"],
  members: {
    GroupByAttributeValue: {
      shape: {
        type: "string"
      }
    },
    Count: {
      shape: {
        type: "integer"
      }
    }
  }
};
