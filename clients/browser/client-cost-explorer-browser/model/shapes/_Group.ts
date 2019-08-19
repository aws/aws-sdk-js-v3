import { _Keys } from "./_Keys";
import { _Metrics } from "./_Metrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Group: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Keys: {
      shape: _Keys
    },
    Metrics: {
      shape: _Metrics
    }
  }
};
