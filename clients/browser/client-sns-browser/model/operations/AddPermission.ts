import { AddPermissionInput } from "../shapes/AddPermissionInput";
import { AddPermissionOutput } from "../shapes/AddPermissionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddPermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddPermissionInput
  },
  output: {
    shape: AddPermissionOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: NotFoundException
    }
  ]
};
