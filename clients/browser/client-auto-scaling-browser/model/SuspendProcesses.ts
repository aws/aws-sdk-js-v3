import { SuspendProcessesInput } from "./SuspendProcessesInput";
import { SuspendProcessesOutput } from "./SuspendProcessesOutput";
import { ResourceInUseFault } from "./ResourceInUseFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SuspendProcesses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SuspendProcesses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SuspendProcessesInput
  },
  output: {
    shape: SuspendProcessesOutput
  },
  errors: [
    {
      shape: ResourceInUseFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
