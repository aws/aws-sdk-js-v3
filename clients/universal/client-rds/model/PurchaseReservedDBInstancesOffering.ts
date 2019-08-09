import { PurchaseReservedDBInstancesOfferingInput } from "./PurchaseReservedDBInstancesOfferingInput";
import { PurchaseReservedDBInstancesOfferingOutput } from "./PurchaseReservedDBInstancesOfferingOutput";
import { ReservedDBInstancesOfferingNotFoundFault } from "./ReservedDBInstancesOfferingNotFoundFault";
import { ReservedDBInstanceAlreadyExistsFault } from "./ReservedDBInstanceAlreadyExistsFault";
import { ReservedDBInstanceQuotaExceededFault } from "./ReservedDBInstanceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
