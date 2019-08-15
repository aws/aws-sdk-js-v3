import { _CapacityReservationTarget } from "./_CapacityReservationTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateCapacityReservationSpecificationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CapacityReservationPreference: {
      shape: {
        type: "string"
      }
    },
    CapacityReservationTarget: {
      shape: _CapacityReservationTarget
    }
  }
};
