import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecurringCharge: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Amount: {
      shape: {
        type: "float"
      },
      locationName: "amount"
    },
    Frequency: {
      shape: {
        type: "string"
      },
      locationName: "frequency"
    }
  }
};
