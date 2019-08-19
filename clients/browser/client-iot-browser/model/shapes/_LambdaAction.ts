import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaAction: _Structure_ = {
  type: "structure",
  required: ["functionArn"],
  members: {
    functionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
