import { DeletePresetInput } from "../shapes/DeletePresetInput";
import { DeletePresetOutput } from "../shapes/DeletePresetOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
