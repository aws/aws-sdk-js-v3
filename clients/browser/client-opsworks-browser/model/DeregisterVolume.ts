import { DeregisterVolumeInput } from "./DeregisterVolumeInput";
import { DeregisterVolumeOutput } from "./DeregisterVolumeOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterVolumeInput
  },
  output: {
    shape: DeregisterVolumeOutput
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
