import { StopCompilationJobInput } from "./StopCompilationJobInput";
import { StopCompilationJobOutput } from "./StopCompilationJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopCompilationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopCompilationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopCompilationJobInput
  },
  output: {
    shape: StopCompilationJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
