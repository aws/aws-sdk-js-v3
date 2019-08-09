import { ListTagsForProjectInput } from "./ListTagsForProjectInput";
import { ListTagsForProjectOutput } from "./ListTagsForProjectOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
