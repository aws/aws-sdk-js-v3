import { GetCredentialsForIdentityInput } from "../shapes/GetCredentialsForIdentityInput";
import { GetCredentialsForIdentityOutput } from "../shapes/GetCredentialsForIdentityOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidIdentityPoolConfigurationException } from "../shapes/InvalidIdentityPoolConfigurationException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ExternalServiceException } from "../shapes/ExternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCredentialsForIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCredentialsForIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCredentialsForIdentityInput
  },
  output: {
    shape: GetCredentialsForIdentityOutput
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
      shape: InvalidIdentityPoolConfigurationException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: ExternalServiceException
    }
  ]
};
