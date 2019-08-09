import { DisassociateDRTRoleInput } from "./DisassociateDRTRoleInput";
import { DisassociateDRTRoleOutput } from "./DisassociateDRTRoleOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
