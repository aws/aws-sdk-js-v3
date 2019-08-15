import { ListBuildsForProjectInput } from "../shapes/ListBuildsForProjectInput";
import { ListBuildsForProjectOutput } from "../shapes/ListBuildsForProjectOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBuildsForProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBuildsForProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBuildsForProjectInput
  },
  output: {
    shape: ListBuildsForProjectOutput
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
