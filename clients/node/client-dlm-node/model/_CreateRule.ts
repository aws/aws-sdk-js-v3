import { _TimesList } from "./_TimesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateRule: _Structure_ = {
  type: "structure",
  required: ["Interval", "IntervalUnit"],
  members: {
    Interval: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    IntervalUnit: {
      shape: {
        type: "string"
      }
    },
    Times: {
      shape: _TimesList
    }
  }
};
