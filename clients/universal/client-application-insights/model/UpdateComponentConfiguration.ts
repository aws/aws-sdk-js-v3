import { UpdateComponentConfigurationInput } from "./UpdateComponentConfigurationInput";
import { UpdateComponentConfigurationOutput } from "./UpdateComponentConfigurationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
