import { StopCompilationJobInput } from "../shapes/StopCompilationJobInput";
import { StopCompilationJobOutput } from "../shapes/StopCompilationJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
