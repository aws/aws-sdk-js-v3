import { ListProjectsInput } from "../shapes/ListProjectsInput";
import { ListProjectsOutput } from "../shapes/ListProjectsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ValidationException } from "../shapes/ValidationException";
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
      shape: InvalidNextTokenException
    },
    {
      shape: ValidationException
    }
  ]
};
