import { DeleteProtectionInput } from "../shapes/DeleteProtectionInput";
import { DeleteProtectionOutput } from "../shapes/DeleteProtectionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
