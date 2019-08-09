import { ListComponentsInput } from "./ListComponentsInput";
import { ListComponentsOutput } from "./ListComponentsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
