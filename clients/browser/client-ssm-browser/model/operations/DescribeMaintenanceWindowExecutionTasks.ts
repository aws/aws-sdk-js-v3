import { DescribeMaintenanceWindowExecutionTasksInput } from "../shapes/DescribeMaintenanceWindowExecutionTasksInput";
import { DescribeMaintenanceWindowExecutionTasksOutput } from "../shapes/DescribeMaintenanceWindowExecutionTasksOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
