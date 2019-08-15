import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountTakeoverActionType: _Structure_ = {
  type: "structure",
  required: ["Notify", "EventAction"],
  members: {
    Notify: {
      shape: {
        type: "boolean"
      }
    },
    EventAction: {
      shape: {
        type: "string"
      }
    }
  }
};
