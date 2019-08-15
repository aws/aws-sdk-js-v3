import { GetIdInput } from "../shapes/GetIdInput";
import { GetIdOutput } from "../shapes/GetIdOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ExternalServiceException } from "../shapes/ExternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetId: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetId",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdInput
  },
  output: {
    shape: GetIdOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ExternalServiceException
    }
  ]
};
