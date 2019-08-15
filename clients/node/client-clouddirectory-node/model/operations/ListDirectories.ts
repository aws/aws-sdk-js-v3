import { ListDirectoriesInput } from "../shapes/ListDirectoriesInput";
import { ListDirectoriesOutput } from "../shapes/ListDirectoriesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDirectories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDirectories",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/directory/list"
  },
  input: {
    shape: ListDirectoriesInput
  },
  output: {
    shape: ListDirectoriesOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: RetryableConflictException
    },
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
