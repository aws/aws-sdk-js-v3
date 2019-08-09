import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetAlarmStateInput: _Structure_ = {
  type: "structure",
  required: ["AlarmName", "StateValue", "StateReason"],
  members: {
    AlarmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StateValue: {
      shape: {
        type: "string"
      }
    },
    StateReason: {
      shape: {
        type: "string"
      }
    },
    StateReasonData: {
      shape: {
        type: "string"
      }
    }
  }
};
