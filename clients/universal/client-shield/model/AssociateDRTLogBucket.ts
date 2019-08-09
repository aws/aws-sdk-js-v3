import { AssociateDRTLogBucketInput } from "./AssociateDRTLogBucketInput";
import { AssociateDRTLogBucketOutput } from "./AssociateDRTLogBucketOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { NoAssociatedRoleException } from "./NoAssociatedRoleException";
import { LimitsExceededException } from "./LimitsExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateDRTLogBucket: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDRTLogBucket",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDRTLogBucketInput
  },
  output: {
    shape: AssociateDRTLogBucketOutput
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
      shape: LimitsExceededException
    },
    {
      shape: InvalidParameterException
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
