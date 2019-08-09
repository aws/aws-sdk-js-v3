import { PurchaseHostReservationInput } from "./PurchaseHostReservationInput";
import { PurchaseHostReservationOutput } from "./PurchaseHostReservationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
