import { DeleteProtectionInput } from "./DeleteProtectionInput";
import { DeleteProtectionOutput } from "./DeleteProtectionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OptimisticLockException } from "./OptimisticLockException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteProtection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProtection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProtectionInput
  },
  output: {
    shape: DeleteProtectionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OptimisticLockException
    }
  ]
};
