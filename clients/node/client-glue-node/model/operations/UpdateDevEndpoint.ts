import { UpdateDevEndpointInput } from "../shapes/UpdateDevEndpointInput";
import { UpdateDevEndpointOutput } from "../shapes/UpdateDevEndpointOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
