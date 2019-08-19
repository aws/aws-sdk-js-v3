import { PurchaseScheduledInstancesInput } from "../shapes/PurchaseScheduledInstancesInput";
import { PurchaseScheduledInstancesOutput } from "../shapes/PurchaseScheduledInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseScheduledInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseScheduledInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseScheduledInstancesInput
  },
  output: {
    shape: PurchaseScheduledInstancesOutput
  },
  errors: []
};
