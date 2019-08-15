import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedScheduledUpdateGroupActionRequest: _Structure_ = {
  type: "structure",
  required: ["ScheduledActionName"],
  members: {
    ScheduledActionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
