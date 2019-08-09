import { ListCodeRepositoriesInput } from "./ListCodeRepositoriesInput";
import { ListCodeRepositoriesOutput } from "./ListCodeRepositoriesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCodeRepositories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCodeRepositories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCodeRepositoriesInput
  },
  output: {
    shape: ListCodeRepositoriesOutput
  },
  errors: []
};
