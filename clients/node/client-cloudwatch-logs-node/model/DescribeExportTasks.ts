import { DescribeExportTasksInput } from "./DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "./DescribeExportTasksOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
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
      shape: InvalidParameterException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
