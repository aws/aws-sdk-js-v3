import { UpdateResourceServerInput } from "./UpdateResourceServerInput";
import { UpdateResourceServerOutput } from "./UpdateResourceServerOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateResourceServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResourceServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateResourceServerInput
  },
  output: {
    shape: UpdateResourceServerOutput
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
      shape: InternalErrorException
    }
  ]
};
