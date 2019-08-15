import { UpdateCodeRepositoryInput } from "../shapes/UpdateCodeRepositoryInput";
import { UpdateCodeRepositoryOutput } from "../shapes/UpdateCodeRepositoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCodeRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCodeRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCodeRepositoryInput
  },
  output: {
    shape: UpdateCodeRepositoryOutput
  },
  errors: []
};
