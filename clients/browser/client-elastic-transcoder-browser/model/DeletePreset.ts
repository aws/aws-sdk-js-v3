import { DeletePresetInput } from "./DeletePresetInput";
import { DeletePresetOutput } from "./DeletePresetOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePreset",
  http: {
    method: "DELETE",
    requestUri: "/2012-09-25/presets/{Id}"
  },
  input: {
    shape: DeletePresetInput
  },
  output: {
    shape: DeletePresetOutput
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
