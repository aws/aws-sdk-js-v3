import { ListRepositoriesInput } from "../shapes/ListRepositoriesInput";
import { ListRepositoriesOutput } from "../shapes/ListRepositoriesOutput";
import { InvalidSortByException } from "../shapes/InvalidSortByException";
import { InvalidOrderException } from "../shapes/InvalidOrderException";
import { InvalidContinuationTokenException } from "../shapes/InvalidContinuationTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRepositories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRepositories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRepositoriesInput
  },
  output: {
    shape: ListRepositoriesOutput
  },
  errors: [
    {
      shape: InvalidSortByException
    },
    {
      shape: InvalidOrderException
    },
    {
      shape: InvalidContinuationTokenException
    }
  ]
};
