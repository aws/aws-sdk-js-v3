import { RemovePermissionInput } from "./RemovePermissionInput";
import { RemovePermissionOutput } from "./RemovePermissionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
