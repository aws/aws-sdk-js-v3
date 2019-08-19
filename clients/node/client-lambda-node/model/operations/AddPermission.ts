import { AddPermissionInput } from "../shapes/AddPermissionInput";
import { AddPermissionOutput } from "../shapes/AddPermissionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { PolicyLengthExceededException } from "../shapes/PolicyLengthExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddPermission",
  http: {
    method: "POST",
    requestUri: "/2015-03-31/functions/{FunctionName}/policy"
  },
  input: {
    shape: AddPermissionInput
  },
  output: {
    shape: AddPermissionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: PolicyLengthExceededException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
