import { RemovePermissionInput } from "./RemovePermissionInput";
import { RemovePermissionOutput } from "./RemovePermissionOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemovePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemovePermission",
  http: {
    method: "DELETE",
    requestUri: "/2015-03-31/functions/{FunctionName}/policy/{StatementId}"
  },
  input: {
    shape: RemovePermissionInput
  },
  output: {
    shape: RemovePermissionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
