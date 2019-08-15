import { CreateDevEndpointInput } from "../shapes/CreateDevEndpointInput";
import { CreateDevEndpointOutput } from "../shapes/CreateDevEndpointOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDevEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDevEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDevEndpointInput
  },
  output: {
    shape: CreateDevEndpointOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: IdempotentParameterMismatchException
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
    },
    {
      shape: ResourceNumberLimitExceededException
    }
  ]
};
