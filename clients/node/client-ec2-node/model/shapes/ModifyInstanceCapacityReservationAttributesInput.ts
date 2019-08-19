import { _CapacityReservationSpecification } from "./_CapacityReservationSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceCapacityReservationAttributesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "CapacityReservationSpecification"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    CapacityReservationSpecification: {
      shape: _CapacityReservationSpecification
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
