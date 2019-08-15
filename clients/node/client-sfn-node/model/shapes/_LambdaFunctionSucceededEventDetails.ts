import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionSucceededEventDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    output: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
