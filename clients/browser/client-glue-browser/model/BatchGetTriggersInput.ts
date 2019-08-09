import { _TriggerNameList } from "./_TriggerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetTriggersInput: _Structure_ = {
  type: "structure",
  required: ["TriggerNames"],
  members: {
    TriggerNames: {
      shape: _TriggerNameList
    }
  }
};
