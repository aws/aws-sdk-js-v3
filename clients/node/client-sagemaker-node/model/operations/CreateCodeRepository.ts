import { CreateCodeRepositoryInput } from "../shapes/CreateCodeRepositoryInput";
import { CreateCodeRepositoryOutput } from "../shapes/CreateCodeRepositoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCodeRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCodeRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCodeRepositoryInput
  },
  output: {
    shape: CreateCodeRepositoryOutput
  },
  errors: []
};
