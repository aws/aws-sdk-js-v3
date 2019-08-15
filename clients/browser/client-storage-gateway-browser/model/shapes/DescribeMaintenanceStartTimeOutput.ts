import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceStartTimeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    HourOfDay: {
      shape: {
        type: "integer"
      }
    },
    MinuteOfHour: {
      shape: {
        type: "integer"
      }
    },
    DayOfWeek: {
      shape: {
        type: "integer"
      }
    },
    DayOfMonth: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Timezone: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
