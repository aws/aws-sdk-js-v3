import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledUpdateGroupActionRequest: _Structure_ = {
  type: "structure",
  required: ["ScheduledActionName"],
  members: {
    ScheduledActionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Recurrence: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MinSize: {
      shape: {
        type: "integer"
      }
    },
    MaxSize: {
      shape: {
        type: "integer"
      }
    },
    DesiredCapacity: {
      shape: {
        type: "integer"
      }
    }
  }
};
