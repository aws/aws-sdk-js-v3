import { _HPOObjective } from "./_HPOObjective";
import { _HPOResourceConfig } from "./_HPOResourceConfig";
import { _HyperParameterRanges } from "./_HyperParameterRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HPOConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    hpoObjective: {
      shape: _HPOObjective
    },
    hpoResourceConfig: {
      shape: _HPOResourceConfig
    },
    algorithmHyperParameterRanges: {
      shape: _HyperParameterRanges
    }
  }
};
