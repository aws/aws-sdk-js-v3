import { ListTagsForProjectInput } from "../shapes/ListTagsForProjectInput";
import { ListTagsForProjectOutput } from "../shapes/ListTagsForProjectOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForProjectInput
  },
  output: {
    shape: ListTagsForProjectOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
