import { _Variables } from "./_Variables";
import { _Timers } from "./_Timers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorState: _Structure_ = {
  type: "structure",
  required: ["stateName", "variables", "timers"],
  members: {
    stateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    variables: {
      shape: _Variables
    },
    timers: {
      shape: _Timers
    }
  }
};
