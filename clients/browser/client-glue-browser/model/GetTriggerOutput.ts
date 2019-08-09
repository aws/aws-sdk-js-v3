import { _Trigger } from "./_Trigger";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTriggerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Trigger: {
      shape: _Trigger
    }
  }
};
