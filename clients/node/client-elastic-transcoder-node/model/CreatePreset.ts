import { CreatePresetInput } from "./CreatePresetInput";
import { CreatePresetOutput } from "./CreatePresetOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
