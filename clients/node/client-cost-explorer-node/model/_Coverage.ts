import { _CoverageHours } from "./_CoverageHours";
import { _CoverageNormalizedUnits } from "./_CoverageNormalizedUnits";
import { _CoverageCost } from "./_CoverageCost";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Coverage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CoverageHours: {
      shape: _CoverageHours
    },
    CoverageNormalizedUnits: {
      shape: _CoverageNormalizedUnits
    },
    CoverageCost: {
      shape: _CoverageCost
    }
  }
};
