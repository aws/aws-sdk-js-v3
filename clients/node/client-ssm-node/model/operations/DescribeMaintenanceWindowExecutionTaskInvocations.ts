import { DescribeMaintenanceWindowExecutionTaskInvocationsInput } from "../shapes/DescribeMaintenanceWindowExecutionTaskInvocationsInput";
import { DescribeMaintenanceWindowExecutionTaskInvocationsOutput } from "../shapes/DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMaintenanceWindowExecutionTaskInvocations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowExecutionTaskInvocations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowExecutionTaskInvocationsInput
  },
  output: {
    shape: DescribeMaintenanceWindowExecutionTaskInvocationsOutput
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
