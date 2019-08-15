import { _TriggerNameList } from "./_TriggerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTriggersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TriggerNames: {
      shape: _TriggerNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
