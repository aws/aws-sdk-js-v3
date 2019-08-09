import { StopContinuousExportInput } from "./StopContinuousExportInput";
import { StopContinuousExportOutput } from "./StopContinuousExportOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopContinuousExport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopContinuousExport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopContinuousExportInput
  },
  output: {
    shape: StopContinuousExportOutput
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
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
