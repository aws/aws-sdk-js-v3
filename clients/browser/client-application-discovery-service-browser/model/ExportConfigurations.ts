import { ExportConfigurationsInput } from "./ExportConfigurationsInput";
import { ExportConfigurationsOutput } from "./ExportConfigurationsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
