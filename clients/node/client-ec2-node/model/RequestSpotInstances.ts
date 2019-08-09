import { RequestSpotInstancesInput } from "./RequestSpotInstancesInput";
import { RequestSpotInstancesOutput } from "./RequestSpotInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RequestSpotInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestSpotInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestSpotInstancesInput
  },
  output: {
    shape: RequestSpotInstancesOutput
  },
  errors: []
};
