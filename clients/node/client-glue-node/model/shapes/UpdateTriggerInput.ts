import { _TriggerUpdate } from "./_TriggerUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTriggerInput: _Structure_ = {
  type: "structure",
  required: ["Name", "TriggerUpdate"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TriggerUpdate: {
      shape: _TriggerUpdate
    }
  }
};
