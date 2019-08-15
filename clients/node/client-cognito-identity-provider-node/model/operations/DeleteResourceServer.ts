import { DeleteResourceServerInput } from "../shapes/DeleteResourceServerInput";
import { DeleteResourceServerOutput } from "../shapes/DeleteResourceServerOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
