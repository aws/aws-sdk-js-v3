import { StartImportTaskInput } from "./StartImportTaskInput";
import { StartImportTaskOutput } from "./StartImportTaskOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartImportTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartImportTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartImportTaskInput
  },
  output: {
    shape: StartImportTaskOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
