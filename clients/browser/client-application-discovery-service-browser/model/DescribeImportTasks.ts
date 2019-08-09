import { DescribeImportTasksInput } from "./DescribeImportTasksInput";
import { DescribeImportTasksOutput } from "./DescribeImportTasksOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
