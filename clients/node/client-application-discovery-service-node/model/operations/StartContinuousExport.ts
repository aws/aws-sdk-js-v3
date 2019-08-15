import { StartContinuousExportInput } from "../shapes/StartContinuousExportInput";
import { StartContinuousExportOutput } from "../shapes/StartContinuousExportOutput";
import { ConflictErrorException } from "../shapes/ConflictErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartContinuousExport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartContinuousExport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartContinuousExportInput
  },
  output: {
    shape: StartContinuousExportOutput
  },
  errors: [
    {
      shape: ConflictErrorException
    },
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
      shape: ResourceInUseException
    }
  ]
};
