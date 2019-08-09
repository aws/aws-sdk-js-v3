import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaAction: _Structure_ = {
  type: "structure",
  required: ["FunctionArn"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    FunctionArn: {
      shape: {
        type: "string"
      }
    },
    InvocationType: {
      shape: {
        type: "string"
      }
    }
  }
};
