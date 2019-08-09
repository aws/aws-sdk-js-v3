import { ModifyReservedInstancesInput } from "./ModifyReservedInstancesInput";
import { ModifyReservedInstancesOutput } from "./ModifyReservedInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
