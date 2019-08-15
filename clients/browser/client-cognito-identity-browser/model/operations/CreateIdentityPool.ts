import { CreateIdentityPoolInput } from "../shapes/CreateIdentityPoolInput";
import { CreateIdentityPoolOutput } from "../shapes/CreateIdentityPoolOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIdentityPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIdentityPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateIdentityPoolInput
  },
  output: {
    shape: CreateIdentityPoolOutput
  },
  errors: [
    {
      shape: InvalidParameterException
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
    }
  ]
};
