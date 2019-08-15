import { UpdateVolumeInput } from "../shapes/UpdateVolumeInput";
import { UpdateVolumeOutput } from "../shapes/UpdateVolumeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateVolumeInput
  },
  output: {
    shape: UpdateVolumeOutput
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
