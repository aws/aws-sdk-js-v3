import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaFunctionStartedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["scheduledEventId"],
  members: {
    scheduledEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
