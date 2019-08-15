import { RunScheduledInstancesInput } from "../shapes/RunScheduledInstancesInput";
import { RunScheduledInstancesOutput } from "../shapes/RunScheduledInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RunScheduledInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RunScheduledInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RunScheduledInstancesInput
  },
  output: {
    shape: RunScheduledInstancesOutput
  },
  errors: []
};
