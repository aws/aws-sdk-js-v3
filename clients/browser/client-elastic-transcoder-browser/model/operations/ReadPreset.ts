import { ReadPresetInput } from "../shapes/ReadPresetInput";
import { ReadPresetOutput } from "../shapes/ReadPresetOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReadPreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReadPreset",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/presets/{Id}"
  },
  input: {
    shape: ReadPresetInput
  },
  output: {
    shape: ReadPresetOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceException
    }
  ]
};
