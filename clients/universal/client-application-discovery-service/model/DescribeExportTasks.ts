import { DescribeExportTasksInput } from "./DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "./DescribeExportTasksOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeExportTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeExportTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeExportTasksInput
  },
  output: {
    shape: DescribeExportTasksOutput
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
    }
  ]
};
