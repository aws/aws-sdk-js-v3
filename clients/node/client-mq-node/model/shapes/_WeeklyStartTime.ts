import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WeeklyStartTime: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DayOfWeek: {
      shape: {
        type: "string"
      },
      locationName: "dayOfWeek"
    },
    TimeOfDay: {
      shape: {
        type: "string"
      },
      locationName: "timeOfDay"
    },
    TimeZone: {
      shape: {
        type: "string"
      },
      locationName: "timeZone"
    }
  }
};
