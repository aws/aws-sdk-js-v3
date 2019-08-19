import { PutPermissionInput } from "../shapes/PutPermissionInput";
import { PutPermissionOutput } from "../shapes/PutPermissionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { PolicyLengthExceededException } from "../shapes/PolicyLengthExceededException";
import { InternalException } from "../shapes/InternalException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutPermissionInput
  },
  output: {
    shape: PutPermissionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: PolicyLengthExceededException
    },
    {
      shape: InternalException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
