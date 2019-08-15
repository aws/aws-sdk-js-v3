import { _TriggerEventTypeList } from "./_TriggerEventTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TriggerConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    triggerName: {
      shape: {
        type: "string"
      }
    },
    triggerTargetArn: {
      shape: {
        type: "string"
      }
    },
    triggerEvents: {
      shape: _TriggerEventTypeList
    }
  }
};
