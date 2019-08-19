import { ModifyClientPropertiesInput } from "../shapes/ModifyClientPropertiesInput";
import { ModifyClientPropertiesOutput } from "../shapes/ModifyClientPropertiesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
