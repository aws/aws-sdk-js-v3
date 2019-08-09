import { PurchaseReservedNodeOfferingInput } from "./PurchaseReservedNodeOfferingInput";
import { PurchaseReservedNodeOfferingOutput } from "./PurchaseReservedNodeOfferingOutput";
import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { ReservedNodeAlreadyExistsFault } from "./ReservedNodeAlreadyExistsFault";
import { ReservedNodeQuotaExceededFault } from "./ReservedNodeQuotaExceededFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PurchaseReservedNodeOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseReservedNodeOffering",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseReservedNodeOfferingInput
  },
  output: {
    shape: PurchaseReservedNodeOfferingOutput,
    resultWrapper: "PurchaseReservedNodeOfferingResult"
  },
  errors: [
    {
      shape: ReservedNodeOfferingNotFoundFault
    },
    {
      shape: ReservedNodeAlreadyExistsFault
    },
    {
      shape: ReservedNodeQuotaExceededFault
    },
    {
      shape: UnsupportedOperationFault
    }
  ]
};
