import { ListBuildsForProjectInput } from "./ListBuildsForProjectInput";
import { ListBuildsForProjectOutput } from "./ListBuildsForProjectOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
