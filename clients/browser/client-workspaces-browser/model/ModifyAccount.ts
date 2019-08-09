import { ModifyAccountInput } from "./ModifyAccountInput";
import { ModifyAccountOutput } from "./ModifyAccountOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
