import { RegisterVolumeInput } from "../shapes/RegisterVolumeInput";
import { RegisterVolumeOutput } from "../shapes/RegisterVolumeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterVolumeInput
  },
  output: {
    shape: RegisterVolumeOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
