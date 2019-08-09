import { ListPresetsInput } from "./ListPresetsInput";
import { ListPresetsOutput } from "./ListPresetsOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPresets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPresets",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/presets"
  },
  input: {
    shape: ListPresetsInput
  },
  output: {
    shape: ListPresetsOutput
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
      shape: InternalServiceException
    }
  ]
};
