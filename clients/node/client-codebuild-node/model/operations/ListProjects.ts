import { ListProjectsInput } from "../shapes/ListProjectsInput";
import { ListProjectsOutput } from "../shapes/ListProjectsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProjects",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProjectsInput
  },
  output: {
    shape: ListProjectsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
