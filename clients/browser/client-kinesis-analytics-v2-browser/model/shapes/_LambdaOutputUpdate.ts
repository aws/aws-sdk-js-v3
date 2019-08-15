import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaOutputUpdate: _Structure_ = {
  type: "structure",
  required: ["ResourceARNUpdate"],
  members: {
    ResourceARNUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
