import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationPlanSettings: _Structure_ = {
  type: "structure",
  required: ["Commitment", "ReservedSlots", "RenewalType"],
  members: {
    Commitment: {
      shape: {
        type: "string"
      },
      locationName: "commitment"
    },
    RenewalType: {
      shape: {
        type: "string"
      },
      locationName: "renewalType"
    },
    ReservedSlots: {
      shape: {
        type: "integer"
      },
      locationName: "reservedSlots"
    }
  }
};
