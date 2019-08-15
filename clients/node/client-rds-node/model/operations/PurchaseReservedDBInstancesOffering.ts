import { PurchaseReservedDBInstancesOfferingInput } from "../shapes/PurchaseReservedDBInstancesOfferingInput";
import { PurchaseReservedDBInstancesOfferingOutput } from "../shapes/PurchaseReservedDBInstancesOfferingOutput";
import { ReservedDBInstancesOfferingNotFoundFault } from "../shapes/ReservedDBInstancesOfferingNotFoundFault";
import { ReservedDBInstanceAlreadyExistsFault } from "../shapes/ReservedDBInstanceAlreadyExistsFault";
import { ReservedDBInstanceQuotaExceededFault } from "../shapes/ReservedDBInstanceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseReservedDBInstancesOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseReservedDBInstancesOffering",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseReservedDBInstancesOfferingInput
  },
  output: {
    shape: PurchaseReservedDBInstancesOfferingOutput,
    resultWrapper: "PurchaseReservedDBInstancesOfferingResult"
  },
  errors: [
    {
      shape: ReservedDBInstancesOfferingNotFoundFault
    },
    {
      shape: ReservedDBInstanceAlreadyExistsFault
    },
    {
      shape: ReservedDBInstanceQuotaExceededFault
    }
  ]
};
