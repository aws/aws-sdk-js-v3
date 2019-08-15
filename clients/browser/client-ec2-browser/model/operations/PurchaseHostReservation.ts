import { PurchaseHostReservationInput } from "../shapes/PurchaseHostReservationInput";
import { PurchaseHostReservationOutput } from "../shapes/PurchaseHostReservationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseHostReservation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseHostReservation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseHostReservationInput
  },
  output: {
    shape: PurchaseHostReservationOutput
  },
  errors: []
};
