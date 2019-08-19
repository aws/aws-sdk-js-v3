import { DeleteCodeRepositoryInput } from "../shapes/DeleteCodeRepositoryInput";
import { DeleteCodeRepositoryOutput } from "../shapes/DeleteCodeRepositoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCodeRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCodeRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCodeRepositoryInput
  },
  output: {
    shape: DeleteCodeRepositoryOutput
  },
  errors: []
};
