import { ListResourcesInput } from "./ListResourcesInput";
import { ListResourcesOutput } from "./ListResourcesOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
