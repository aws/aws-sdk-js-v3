import { GetObjectInformationInput } from "./GetObjectInformationInput";
import { GetObjectInformationOutput } from "./GetObjectInformationOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetObjectInformation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObjectInformation",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/object/information"
  },
  input: {
    shape: GetObjectInformationInput
  },
  output: {
    shape: GetObjectInformationOutput
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
      shape: DirectoryNotEnabledException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
