import { ListSolutionVersionsInput } from "../shapes/ListSolutionVersionsInput";
import { ListSolutionVersionsOutput } from "../shapes/ListSolutionVersionsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSolutionVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSolutionVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSolutionVersionsInput
  },
  output: {
    shape: ListSolutionVersionsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
