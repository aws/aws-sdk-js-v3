import { StopInstancesInput } from "../shapes/StopInstancesInput";
import { StopInstancesOutput } from "../shapes/StopInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopInstancesInput
  },
  output: {
    shape: StopInstancesOutput
  },
  errors: []
};
