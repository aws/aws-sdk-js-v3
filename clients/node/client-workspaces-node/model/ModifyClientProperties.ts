import { ModifyClientPropertiesInput } from "./ModifyClientPropertiesInput";
import { ModifyClientPropertiesOutput } from "./ModifyClientPropertiesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClientProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClientProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClientPropertiesInput
  },
  output: {
    shape: ModifyClientPropertiesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
