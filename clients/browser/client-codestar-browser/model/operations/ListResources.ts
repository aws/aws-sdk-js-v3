import { ListResourcesInput } from "../shapes/ListResourcesInput";
import { ListResourcesOutput } from "../shapes/ListResourcesOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourcesInput
  },
  output: {
    shape: ListResourcesOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ValidationException
    }
  ]
};
