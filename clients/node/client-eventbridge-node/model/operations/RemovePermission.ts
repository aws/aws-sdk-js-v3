import { RemovePermissionInput } from "../shapes/RemovePermissionInput";
import { RemovePermissionOutput } from "../shapes/RemovePermissionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalException } from "../shapes/InternalException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemovePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemovePermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemovePermissionInput
  },
  output: {
    shape: RemovePermissionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
