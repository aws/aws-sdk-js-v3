import { ModifyAccountInput } from "../shapes/ModifyAccountInput";
import { ModifyAccountOutput } from "../shapes/ModifyAccountOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyAccount",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyAccountInput
  },
  output: {
    shape: ModifyAccountOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: ResourceUnavailableException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
