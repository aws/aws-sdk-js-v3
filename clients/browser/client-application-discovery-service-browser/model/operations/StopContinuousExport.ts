import { StopContinuousExportInput } from "../shapes/StopContinuousExportInput";
import { StopContinuousExportOutput } from "../shapes/StopContinuousExportOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
