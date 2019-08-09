import { DescribeMaintenanceWindowTasksInput } from "./DescribeMaintenanceWindowTasksInput";
import { DescribeMaintenanceWindowTasksOutput } from "./DescribeMaintenanceWindowTasksOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeMaintenanceWindowTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowTasksInput
  },
  output: {
    shape: DescribeMaintenanceWindowTasksOutput
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
