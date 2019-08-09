import { CreateCapacityReservationInput } from "./CreateCapacityReservationInput";
import { CreateCapacityReservationOutput } from "./CreateCapacityReservationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCapacityReservation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCapacityReservation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCapacityReservationInput
  },
  output: {
    shape: CreateCapacityReservationOutput
  },
  errors: []
};
