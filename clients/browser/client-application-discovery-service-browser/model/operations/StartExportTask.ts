import { StartExportTaskInput } from "../shapes/StartExportTaskInput";
import { StartExportTaskOutput } from "../shapes/StartExportTaskOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartExportTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartExportTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartExportTaskInput
  },
  output: {
    shape: StartExportTaskOutput
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
