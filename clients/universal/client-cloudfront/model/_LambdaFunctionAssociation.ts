import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionAssociation: _Structure_ = {
  type: "structure",
  required: ["LambdaFunctionARN", "EventType"],
  members: {
    LambdaFunctionARN: {
      shape: {
        type: "string"
      }
    },
    EventType: {
      shape: {
        type: "string"
      }
    },
    IncludeBody: {
      shape: {
        type: "boolean"
      }
    }
  }
};
