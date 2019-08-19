import { ListIdentityPoolsInput } from "../shapes/ListIdentityPoolsInput";
import { ListIdentityPoolsOutput } from "../shapes/ListIdentityPoolsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIdentityPools: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIdentityPools",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIdentityPoolsInput
  },
  output: {
    shape: ListIdentityPoolsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
