import { DescribeMaintenanceWindowTasksInput } from "../shapes/DescribeMaintenanceWindowTasksInput";
import { DescribeMaintenanceWindowTasksOutput } from "../shapes/DescribeMaintenanceWindowTasksOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
