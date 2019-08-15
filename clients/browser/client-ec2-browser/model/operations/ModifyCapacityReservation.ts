import { ModifyCapacityReservationInput } from "../shapes/ModifyCapacityReservationInput";
import { ModifyCapacityReservationOutput } from "../shapes/ModifyCapacityReservationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyCapacityReservation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyCapacityReservation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyCapacityReservationInput
  },
  output: {
    shape: ModifyCapacityReservationOutput
  },
  errors: []
};
