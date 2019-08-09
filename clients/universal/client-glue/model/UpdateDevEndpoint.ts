import { UpdateDevEndpointInput } from "./UpdateDevEndpointInput";
import { UpdateDevEndpointOutput } from "./UpdateDevEndpointOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDevEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDevEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDevEndpointInput
  },
  output: {
    shape: UpdateDevEndpointOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ValidationException
    }
  ]
};
