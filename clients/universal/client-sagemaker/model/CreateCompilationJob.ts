import { CreateCompilationJobInput } from "./CreateCompilationJobInput";
import { CreateCompilationJobOutput } from "./CreateCompilationJobOutput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
