import { UpdateComponentConfigurationInput } from "../shapes/UpdateComponentConfigurationInput";
import { UpdateComponentConfigurationOutput } from "../shapes/UpdateComponentConfigurationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateComponentConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateComponentConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateComponentConfigurationInput
  },
  output: {
    shape: UpdateComponentConfigurationOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
