import { UnassignVolumeInput } from "./UnassignVolumeInput";
import { UnassignVolumeOutput } from "./UnassignVolumeOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
