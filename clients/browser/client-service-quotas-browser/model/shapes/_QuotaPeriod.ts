import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QuotaPeriod: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PeriodValue: {
      shape: {
        type: "integer"
      }
    },
    PeriodUnit: {
      shape: {
        type: "string"
      }
    }
  }
};
