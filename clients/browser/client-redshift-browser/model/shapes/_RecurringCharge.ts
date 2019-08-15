import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecurringCharge: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecurringChargeAmount: {
      shape: {
        type: "float"
      }
    },
    RecurringChargeFrequency: {
      shape: {
        type: "string"
      }
    }
  }
};
