import { PutPermissionInput } from "./PutPermissionInput";
import { PutPermissionOutput } from "./PutPermissionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { PolicyLengthExceededException } from "./PolicyLengthExceededException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
