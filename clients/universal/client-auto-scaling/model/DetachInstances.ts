import { DetachInstancesInput } from "./DetachInstancesInput";
import { DetachInstancesOutput } from "./DetachInstancesOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachInstancesInput
  },
  output: {
    shape: DetachInstancesOutput,
    resultWrapper: "DetachInstancesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
