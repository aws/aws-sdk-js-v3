import { GetObjectInformationInput } from "../shapes/GetObjectInformationInput";
import { GetObjectInformationOutput } from "../shapes/GetObjectInformationOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { RetryableConflictException } from "../shapes/RetryableConflictException";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { DirectoryNotEnabledException } from "../shapes/DirectoryNotEnabledException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
