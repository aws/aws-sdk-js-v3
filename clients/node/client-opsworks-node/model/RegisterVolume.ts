import { RegisterVolumeInput } from "./RegisterVolumeInput";
import { RegisterVolumeOutput } from "./RegisterVolumeOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
