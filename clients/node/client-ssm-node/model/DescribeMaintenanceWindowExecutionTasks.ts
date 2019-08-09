import { DescribeMaintenanceWindowExecutionTasksInput } from "./DescribeMaintenanceWindowExecutionTasksInput";
import { DescribeMaintenanceWindowExecutionTasksOutput } from "./DescribeMaintenanceWindowExecutionTasksOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeMaintenanceWindowExecutionTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowExecutionTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowExecutionTasksInput
  },
  output: {
    shape: DescribeMaintenanceWindowExecutionTasksOutput
  },
  errors: [
    {
      shape: DoesNotExistException
    },
    {
      shape: InternalServerError
    }
  ]
};
