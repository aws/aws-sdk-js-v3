import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeltaTime: _Structure_ = {
  type: "structure",
  required: ["offsetSeconds", "timeExpression"],
  members: {
    offsetSeconds: {
      shape: {
        type: "integer"
      }
    },
    timeExpression: {
      shape: {
        type: "string"
      }
    }
  }
};
