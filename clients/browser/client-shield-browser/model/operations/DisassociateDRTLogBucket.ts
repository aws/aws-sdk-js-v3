import { DisassociateDRTLogBucketInput } from "../shapes/DisassociateDRTLogBucketInput";
import { DisassociateDRTLogBucketOutput } from "../shapes/DisassociateDRTLogBucketOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { NoAssociatedRoleException } from "../shapes/NoAssociatedRoleException";
import { AccessDeniedForDependencyException } from "../shapes/AccessDeniedForDependencyException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
