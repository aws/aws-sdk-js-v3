import { GetHostReservationPurchasePreviewInput } from "../shapes/GetHostReservationPurchasePreviewInput";
import { GetHostReservationPurchasePreviewOutput } from "../shapes/GetHostReservationPurchasePreviewOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHostReservationPurchasePreview: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHostReservationPurchasePreview",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetHostReservationPurchasePreviewInput
  },
  output: {
    shape: GetHostReservationPurchasePreviewOutput
  },
  errors: []
};
