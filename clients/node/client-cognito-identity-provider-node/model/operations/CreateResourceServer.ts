import { CreateResourceServerInput } from "../shapes/CreateResourceServerInput";
import { CreateResourceServerOutput } from "../shapes/CreateResourceServerOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResourceServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResourceServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateResourceServerInput
  },
  output: {
    shape: CreateResourceServerOutput
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
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalErrorException
    }
  ]
};
