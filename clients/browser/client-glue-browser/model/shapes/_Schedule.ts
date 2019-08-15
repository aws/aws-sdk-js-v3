import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Schedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduleExpression: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
