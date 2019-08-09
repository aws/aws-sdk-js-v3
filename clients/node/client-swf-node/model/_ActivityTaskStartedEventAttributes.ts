import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTaskStartedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["scheduledEventId"],
  members: {
    identity: {
      shape: {
        type: "string"
      }
    },
    scheduledEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
