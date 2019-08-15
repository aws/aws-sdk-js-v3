import { AssignVolumeInput } from "../shapes/AssignVolumeInput";
import { AssignVolumeOutput } from "../shapes/AssignVolumeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssignVolume: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssignVolume",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssignVolumeInput
  },
  output: {
    shape: AssignVolumeOutput
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
