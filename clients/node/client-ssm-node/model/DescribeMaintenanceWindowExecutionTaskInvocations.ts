import { DescribeMaintenanceWindowExecutionTaskInvocationsInput } from "./DescribeMaintenanceWindowExecutionTaskInvocationsInput";
import { DescribeMaintenanceWindowExecutionTaskInvocationsOutput } from "./DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
