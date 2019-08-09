import { GetUserPoolMfaConfigInput } from "./GetUserPoolMfaConfigInput";
import { GetUserPoolMfaConfigOutput } from "./GetUserPoolMfaConfigOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUserPoolMfaConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserPoolMfaConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUserPoolMfaConfigInput
  },
  output: {
    shape: GetUserPoolMfaConfigOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
