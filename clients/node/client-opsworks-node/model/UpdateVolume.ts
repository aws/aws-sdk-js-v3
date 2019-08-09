import { UpdateVolumeInput } from "./UpdateVolumeInput";
import { UpdateVolumeOutput } from "./UpdateVolumeOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
