import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HourlyPrice: {
      shape: {
        type: "string"
      },
      locationName: "hourlyPrice"
    },
    RemainingTotalValue: {
      shape: {
        type: "string"
      },
      locationName: "remainingTotalValue"
    },
    RemainingUpfrontValue: {
      shape: {
        type: "string"
      },
      locationName: "remainingUpfrontValue"
    }
  }
};
