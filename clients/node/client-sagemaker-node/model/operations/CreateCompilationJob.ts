import { CreateCompilationJobInput } from "../shapes/CreateCompilationJobInput";
import { CreateCompilationJobOutput } from "../shapes/CreateCompilationJobOutput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCompilationJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCompilationJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCompilationJobInput
  },
  output: {
    shape: CreateCompilationJobOutput
  },
  errors: [
    {
      shape: ResourceInUse
    },
    {
      shape: ResourceLimitExceeded
    }
  ]
};
