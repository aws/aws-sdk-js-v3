import { AssociateDRTLogBucketInput } from "../shapes/AssociateDRTLogBucketInput";
import { AssociateDRTLogBucketOutput } from "../shapes/AssociateDRTLogBucketOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { NoAssociatedRoleException } from "../shapes/NoAssociatedRoleException";
import { LimitsExceededException } from "../shapes/LimitsExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedForDependencyException } from "../shapes/AccessDeniedForDependencyException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
