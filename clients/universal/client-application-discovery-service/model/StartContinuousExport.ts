import { StartContinuousExportInput } from "./StartContinuousExportInput";
import { StartContinuousExportOutput } from "./StartContinuousExportOutput";
import { ConflictErrorException } from "./ConflictErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
