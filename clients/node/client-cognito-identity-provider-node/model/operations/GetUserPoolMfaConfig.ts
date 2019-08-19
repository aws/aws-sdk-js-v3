import { GetUserPoolMfaConfigInput } from "../shapes/GetUserPoolMfaConfigInput";
import { GetUserPoolMfaConfigOutput } from "../shapes/GetUserPoolMfaConfigOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
