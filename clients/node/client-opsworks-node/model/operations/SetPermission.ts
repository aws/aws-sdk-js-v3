import { SetPermissionInput } from "../shapes/SetPermissionInput";
import { SetPermissionOutput } from "../shapes/SetPermissionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetPermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetPermissionInput
  },
  output: {
    shape: SetPermissionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
