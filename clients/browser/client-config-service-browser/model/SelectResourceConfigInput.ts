import { Structure as _Structure_ } from "@aws-sdk/types";

export const SelectResourceConfigInput: _Structure_ = {
  type: "structure",
  required: ["Expression"],
  members: {
    Expression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
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
