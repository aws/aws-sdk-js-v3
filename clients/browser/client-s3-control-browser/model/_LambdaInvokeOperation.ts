import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaInvokeOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FunctionArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
