import { TestRoleInput } from "../shapes/TestRoleInput";
import { TestRoleOutput } from "../shapes/TestRoleOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestRole",
  http: {
    method: "POST",
    requestUri: "/2012-09-25/roleTests"
  },
  input: {
    shape: TestRoleInput
  },
  output: {
    shape: TestRoleOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceException
    }
  ]
};
