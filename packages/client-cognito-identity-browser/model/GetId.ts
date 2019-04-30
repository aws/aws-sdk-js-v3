import { GetIdInput } from "./GetIdInput";
import { GetIdOutput } from "./GetIdOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { ExternalServiceException } from "./ExternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
