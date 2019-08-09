import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRuleNamesByTargetInput: _Structure_ = {
  type: "structure",
  required: ["TargetArn"],
  members: {
    TargetArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventBusName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
