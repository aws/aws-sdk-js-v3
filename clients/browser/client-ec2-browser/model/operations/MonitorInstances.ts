import { MonitorInstancesInput } from "../shapes/MonitorInstancesInput";
import { MonitorInstancesOutput } from "../shapes/MonitorInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const MonitorInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MonitorInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MonitorInstancesInput
  },
  output: {
    shape: MonitorInstancesOutput
  },
  errors: []
};
