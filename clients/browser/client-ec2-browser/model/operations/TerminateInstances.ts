import { TerminateInstancesInput } from "../shapes/TerminateInstancesInput";
import { TerminateInstancesOutput } from "../shapes/TerminateInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TerminateInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateInstancesInput
  },
  output: {
    shape: TerminateInstancesOutput
  },
  errors: []
};
