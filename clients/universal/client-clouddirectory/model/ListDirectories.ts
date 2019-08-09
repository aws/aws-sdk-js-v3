import { ListDirectoriesInput } from "./ListDirectoriesInput";
import { ListDirectoriesOutput } from "./ListDirectoriesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
