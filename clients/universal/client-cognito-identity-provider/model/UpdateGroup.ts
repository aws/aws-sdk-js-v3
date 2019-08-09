import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateGroupOutput } from "./UpdateGroupOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGroupInput
  },
  output: {
    shape: UpdateGroupOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
