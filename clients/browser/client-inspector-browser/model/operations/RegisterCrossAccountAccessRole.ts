import { RegisterCrossAccountAccessRoleInput } from "../shapes/RegisterCrossAccountAccessRoleInput";
import { RegisterCrossAccountAccessRoleOutput } from "../shapes/RegisterCrossAccountAccessRoleOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidCrossAccountRoleException } from "../shapes/InvalidCrossAccountRoleException";
import { ServiceTemporarilyUnavailableException } from "../shapes/ServiceTemporarilyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
