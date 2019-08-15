import { UnmonitorInstancesInput } from "../shapes/UnmonitorInstancesInput";
import { UnmonitorInstancesOutput } from "../shapes/UnmonitorInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnmonitorInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnmonitorInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnmonitorInstancesInput
  },
  output: {
    shape: UnmonitorInstancesOutput
  },
  errors: []
};
