import { ModifyReservedInstancesInput } from "../shapes/ModifyReservedInstancesInput";
import { ModifyReservedInstancesOutput } from "../shapes/ModifyReservedInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyReservedInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyReservedInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyReservedInstancesInput
  },
  output: {
    shape: ModifyReservedInstancesOutput
  },
  errors: []
};
