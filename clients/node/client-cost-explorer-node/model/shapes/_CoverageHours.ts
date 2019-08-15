import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CoverageHours: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OnDemandHours: {
      shape: {
        type: "string"
      }
    },
    ReservedHours: {
      shape: {
        type: "string"
      }
    },
    TotalRunningHours: {
      shape: {
        type: "string"
      }
    },
    CoverageHoursPercentage: {
      shape: {
        type: "string"
      }
    }
  }
};
