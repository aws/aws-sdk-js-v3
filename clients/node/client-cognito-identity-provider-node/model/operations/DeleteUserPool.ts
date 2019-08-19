import { DeleteUserPoolInput } from "../shapes/DeleteUserPoolInput";
import { DeleteUserPoolOutput } from "../shapes/DeleteUserPoolOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserImportInProgressException } from "../shapes/UserImportInProgressException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserPoolInput
  },
  output: {
    shape: DeleteUserPoolOutput
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
      shape: UserImportInProgressException
    },
    {
      shape: InternalErrorException
    }
  ]
};
