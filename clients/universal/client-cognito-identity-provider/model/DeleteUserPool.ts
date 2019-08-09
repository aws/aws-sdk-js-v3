import { DeleteUserPoolInput } from "./DeleteUserPoolInput";
import { DeleteUserPoolOutput } from "./DeleteUserPoolOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserImportInProgressException } from "./UserImportInProgressException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
