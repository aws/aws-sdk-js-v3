import { DeleteIdentityPoolInput } from "./DeleteIdentityPoolInput";
import { DeleteIdentityPoolOutput } from "./DeleteIdentityPoolOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteIdentityPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIdentityPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIdentityPoolInput
  },
  output: {
    shape: DeleteIdentityPoolOutput
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
