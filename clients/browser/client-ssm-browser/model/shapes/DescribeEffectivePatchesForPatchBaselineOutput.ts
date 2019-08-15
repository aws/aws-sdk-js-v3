import { _EffectivePatchList } from "./_EffectivePatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEffectivePatchesForPatchBaselineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EffectivePatches: {
      shape: _EffectivePatchList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
