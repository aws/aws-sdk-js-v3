import { UpdateUserInput } from "./UpdateUserInput";
import { UpdateUserOutput } from "./UpdateUserOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
