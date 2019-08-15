import { ListPresetsInput } from "../shapes/ListPresetsInput";
import { ListPresetsOutput } from "../shapes/ListPresetsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
