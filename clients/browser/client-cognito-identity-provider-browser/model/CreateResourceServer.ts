import { CreateResourceServerInput } from "./CreateResourceServerInput";
import { CreateResourceServerOutput } from "./CreateResourceServerOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
