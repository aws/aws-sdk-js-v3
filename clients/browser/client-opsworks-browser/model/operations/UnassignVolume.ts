import { UnassignVolumeInput } from "../shapes/UnassignVolumeInput";
import { UnassignVolumeOutput } from "../shapes/UnassignVolumeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnassignVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnassignVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnassignVolumeInput
  },
  output: {
    shape: UnassignVolumeOutput
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
