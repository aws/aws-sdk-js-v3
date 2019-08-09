import { StartExportTaskInput } from "./StartExportTaskInput";
import { StartExportTaskOutput } from "./StartExportTaskOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
