import { TestRoleInput } from "./TestRoleInput";
import { TestRoleOutput } from "./TestRoleOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
