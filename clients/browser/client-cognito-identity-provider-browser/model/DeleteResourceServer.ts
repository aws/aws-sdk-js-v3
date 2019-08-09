import { DeleteResourceServerInput } from "./DeleteResourceServerInput";
import { DeleteResourceServerOutput } from "./DeleteResourceServerOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteResourceServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResourceServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteResourceServerInput
  },
  output: {
    shape: DeleteResourceServerOutput
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
