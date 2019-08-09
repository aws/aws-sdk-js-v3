import { AssociateDRTRoleInput } from "./AssociateDRTRoleInput";
import { AssociateDRTRoleOutput } from "./AssociateDRTRoleOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
