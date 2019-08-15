import { ListComponentsInput } from "../shapes/ListComponentsInput";
import { ListComponentsOutput } from "../shapes/ListComponentsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListComponents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListComponents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListComponentsInput
  },
  output: {
    shape: ListComponentsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
