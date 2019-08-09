import { CreateDevEndpointInput } from "./CreateDevEndpointInput";
import { CreateDevEndpointOutput } from "./CreateDevEndpointOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { ValidationException } from "./ValidationException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
