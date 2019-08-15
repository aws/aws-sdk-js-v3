import { PurchaseReservedNodeOfferingInput } from "../shapes/PurchaseReservedNodeOfferingInput";
import { PurchaseReservedNodeOfferingOutput } from "../shapes/PurchaseReservedNodeOfferingOutput";
import { ReservedNodeOfferingNotFoundFault } from "../shapes/ReservedNodeOfferingNotFoundFault";
import { ReservedNodeAlreadyExistsFault } from "../shapes/ReservedNodeAlreadyExistsFault";
import { ReservedNodeQuotaExceededFault } from "../shapes/ReservedNodeQuotaExceededFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
