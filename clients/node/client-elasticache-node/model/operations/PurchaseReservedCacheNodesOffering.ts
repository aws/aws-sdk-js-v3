import { PurchaseReservedCacheNodesOfferingInput } from "../shapes/PurchaseReservedCacheNodesOfferingInput";
import { PurchaseReservedCacheNodesOfferingOutput } from "../shapes/PurchaseReservedCacheNodesOfferingOutput";
import { ReservedCacheNodesOfferingNotFoundFault } from "../shapes/ReservedCacheNodesOfferingNotFoundFault";
import { ReservedCacheNodeAlreadyExistsFault } from "../shapes/ReservedCacheNodeAlreadyExistsFault";
import { ReservedCacheNodeQuotaExceededFault } from "../shapes/ReservedCacheNodeQuotaExceededFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseReservedCacheNodesOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseReservedCacheNodesOffering",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseReservedCacheNodesOfferingInput
  },
  output: {
    shape: PurchaseReservedCacheNodesOfferingOutput,
    resultWrapper: "PurchaseReservedCacheNodesOfferingResult"
  },
  errors: [
    {
      shape: ReservedCacheNodesOfferingNotFoundFault
    },
    {
      shape: ReservedCacheNodeAlreadyExistsFault
    },
    {
      shape: ReservedCacheNodeQuotaExceededFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
