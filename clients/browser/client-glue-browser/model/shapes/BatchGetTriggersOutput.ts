import { _TriggerList } from "./_TriggerList";
import { _TriggerNameList } from "./_TriggerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetTriggersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Triggers: {
      shape: _TriggerList
    },
    TriggersNotFound: {
      shape: _TriggerNameList
    }
  }
};
