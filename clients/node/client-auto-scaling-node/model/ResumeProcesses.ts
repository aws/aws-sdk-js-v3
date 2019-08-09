import { ResumeProcessesInput } from "./ResumeProcessesInput";
import { ResumeProcessesOutput } from "./ResumeProcessesOutput";
import { ResourceInUseFault } from "./ResourceInUseFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResumeProcesses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResumeProcesses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResumeProcessesInput
  },
  output: {
    shape: ResumeProcessesOutput
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
