import { _TargetValues } from "./_TargetValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Target: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _TargetValues
    }
  }
};
