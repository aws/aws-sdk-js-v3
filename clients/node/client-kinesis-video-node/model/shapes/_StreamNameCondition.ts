import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamNameCondition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComparisonOperator: {
      shape: {
        type: "string"
      }
    },
    ComparisonValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
