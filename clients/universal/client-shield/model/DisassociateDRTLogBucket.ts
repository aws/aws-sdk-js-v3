import { DisassociateDRTLogBucketInput } from "./DisassociateDRTLogBucketInput";
import { DisassociateDRTLogBucketOutput } from "./DisassociateDRTLogBucketOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { NoAssociatedRoleException } from "./NoAssociatedRoleException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateDRTLogBucket: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDRTLogBucket",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateDRTLogBucketInput
  },
  output: {
    shape: DisassociateDRTLogBucketOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: NoAssociatedRoleException
    },
    {
      shape: AccessDeniedForDependencyException
    },
    {
      shape: OptimisticLockException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
