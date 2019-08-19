import { DisassociateDRTRoleInput } from "../shapes/DisassociateDRTRoleInput";
import { DisassociateDRTRoleOutput } from "../shapes/DisassociateDRTRoleOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateDRTRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDRTRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateDRTRoleInput
  },
  output: {
    shape: DisassociateDRTRoleOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: OptimisticLockException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
