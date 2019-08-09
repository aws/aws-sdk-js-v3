import { PurchaseReservedInstancesOfferingInput } from "./PurchaseReservedInstancesOfferingInput";
import { PurchaseReservedInstancesOfferingOutput } from "./PurchaseReservedInstancesOfferingOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PurchaseReservedInstancesOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseReservedInstancesOffering",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseReservedInstancesOfferingInput
  },
  output: {
    shape: PurchaseReservedInstancesOfferingOutput
  },
  errors: []
};
