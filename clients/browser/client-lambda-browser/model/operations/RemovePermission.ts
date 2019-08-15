import { RemovePermissionInput } from "../shapes/RemovePermissionInput";
import { RemovePermissionOutput } from "../shapes/RemovePermissionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
