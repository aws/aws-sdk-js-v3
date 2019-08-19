import { UpdateUserInput } from "../shapes/UpdateUserInput";
import { UpdateUserOutput } from "../shapes/UpdateUserOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserInput
  },
  output: {
    shape: UpdateUserOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
