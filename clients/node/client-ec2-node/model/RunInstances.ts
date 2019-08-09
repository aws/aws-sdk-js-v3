import { RunInstancesInput } from "./RunInstancesInput";
import { RunInstancesOutput } from "./RunInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RunInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RunInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RunInstancesInput
  },
  output: {
    shape: RunInstancesOutput
  },
  errors: []
};
