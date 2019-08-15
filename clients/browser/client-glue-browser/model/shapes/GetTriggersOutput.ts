import { _TriggerList } from "./_TriggerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTriggersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Triggers: {
      shape: _TriggerList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
