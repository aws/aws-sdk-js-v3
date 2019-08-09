import { _TargetParameterList } from "./_TargetParameterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResolvedTargets: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterValues: {
      shape: _TargetParameterList
    },
    Truncated: {
      shape: {
        type: "boolean"
      }
    }
  }
};
