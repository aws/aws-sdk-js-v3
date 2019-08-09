import { PurchaseReservedCacheNodesOfferingInput } from "./PurchaseReservedCacheNodesOfferingInput";
import { PurchaseReservedCacheNodesOfferingOutput } from "./PurchaseReservedCacheNodesOfferingOutput";
import { ReservedCacheNodesOfferingNotFoundFault } from "./ReservedCacheNodesOfferingNotFoundFault";
import { ReservedCacheNodeAlreadyExistsFault } from "./ReservedCacheNodeAlreadyExistsFault";
import { ReservedCacheNodeQuotaExceededFault } from "./ReservedCacheNodeQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
