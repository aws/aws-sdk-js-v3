import { DeleteCodeRepositoryInput } from "./DeleteCodeRepositoryInput";
import { DeleteCodeRepositoryOutput } from "./DeleteCodeRepositoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
