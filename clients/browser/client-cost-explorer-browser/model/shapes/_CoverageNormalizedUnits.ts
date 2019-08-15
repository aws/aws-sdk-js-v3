import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CoverageNormalizedUnits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OnDemandNormalizedUnits: {
      shape: {
        type: "string"
      }
    },
    ReservedNormalizedUnits: {
      shape: {
        type: "string"
      }
    },
    TotalRunningNormalizedUnits: {
      shape: {
        type: "string"
      }
    },
    CoverageNormalizedUnitsPercentage: {
      shape: {
        type: "string"
      }
    }
  }
};
