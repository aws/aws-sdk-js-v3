import { StartInstancesInput } from "../shapes/StartInstancesInput";
import { StartInstancesOutput } from "../shapes/StartInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartInstancesInput
  },
  output: {
    shape: StartInstancesOutput
  },
  errors: []
};
