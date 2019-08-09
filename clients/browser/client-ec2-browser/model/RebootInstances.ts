import { RebootInstancesInput } from "./RebootInstancesInput";
import { RebootInstancesOutput } from "./RebootInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RebootInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootInstancesInput
  },
  output: {
    shape: RebootInstancesOutput
  },
  errors: []
};
