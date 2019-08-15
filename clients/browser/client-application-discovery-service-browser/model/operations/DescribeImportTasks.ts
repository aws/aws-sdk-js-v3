import { DescribeImportTasksInput } from "../shapes/DescribeImportTasksInput";
import { DescribeImportTasksOutput } from "../shapes/DescribeImportTasksOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeImportTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImportTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImportTasksInput
  },
  output: {
    shape: DescribeImportTasksOutput
  },
  errors: [
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
