import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelCapacityReservationInput: _Structure_ = {
  type: "structure",
  required: ["CapacityReservationId"],
  members: {
    CapacityReservationId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
