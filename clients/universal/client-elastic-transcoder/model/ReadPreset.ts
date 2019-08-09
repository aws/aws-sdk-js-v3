import { ReadPresetInput } from "./ReadPresetInput";
import { ReadPresetOutput } from "./ReadPresetOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
