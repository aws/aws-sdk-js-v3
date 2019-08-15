import { SuspendProcessesInput } from "../shapes/SuspendProcessesInput";
import { SuspendProcessesOutput } from "../shapes/SuspendProcessesOutput";
import { ResourceInUseFault } from "../shapes/ResourceInUseFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
