import { AssociateDRTRoleInput } from "../shapes/AssociateDRTRoleInput";
import { AssociateDRTRoleOutput } from "../shapes/AssociateDRTRoleOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { AccessDeniedForDependencyException } from "../shapes/AccessDeniedForDependencyException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDRTRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDRTRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDRTRoleInput
  },
  output: {
    shape: AssociateDRTRoleOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidOperationException
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
