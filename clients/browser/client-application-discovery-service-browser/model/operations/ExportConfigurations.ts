import { ExportConfigurationsInput } from "../shapes/ExportConfigurationsInput";
import { ExportConfigurationsOutput } from "../shapes/ExportConfigurationsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExportConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExportConfigurationsInput
  },
  output: {
    shape: ExportConfigurationsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
