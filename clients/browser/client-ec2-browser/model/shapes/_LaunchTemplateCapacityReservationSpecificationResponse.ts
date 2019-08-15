import { _CapacityReservationTargetResponse } from "./_CapacityReservationTargetResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateCapacityReservationSpecificationResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CapacityReservationPreference: {
      shape: {
        type: "string"
      },
      locationName: "capacityReservationPreference"
    },
    CapacityReservationTarget: {
      shape: _CapacityReservationTargetResponse,
      locationName: "capacityReservationTarget"
    }
  }
};
