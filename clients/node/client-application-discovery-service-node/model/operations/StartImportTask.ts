import { StartImportTaskInput } from "../shapes/StartImportTaskInput";
import { StartImportTaskOutput } from "../shapes/StartImportTaskOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
