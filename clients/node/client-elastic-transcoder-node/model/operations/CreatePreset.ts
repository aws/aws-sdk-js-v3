import { CreatePresetInput } from "../shapes/CreatePresetInput";
import { CreatePresetOutput } from "../shapes/CreatePresetOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePreset",
  http: {
    method: "POST",
    requestUri: "/2012-09-25/presets"
  },
  input: {
    shape: CreatePresetInput
  },
  output: {
    shape: CreatePresetOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceException
    }
  ]
};
