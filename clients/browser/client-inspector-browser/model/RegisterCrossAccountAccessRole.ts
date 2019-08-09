import { RegisterCrossAccountAccessRoleInput } from "./RegisterCrossAccountAccessRoleInput";
import { RegisterCrossAccountAccessRoleOutput } from "./RegisterCrossAccountAccessRoleOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidCrossAccountRoleException } from "./InvalidCrossAccountRoleException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterCrossAccountAccessRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterCrossAccountAccessRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterCrossAccountAccessRoleInput
  },
  output: {
    shape: RegisterCrossAccountAccessRoleOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidCrossAccountRoleException
    },
    {
      shape: ServiceTemporarilyUnavailableException
    }
  ]
};
