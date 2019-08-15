import { DescribeMaintenanceWindowExecutionsInput } from "../shapes/DescribeMaintenanceWindowExecutionsInput";
import { DescribeMaintenanceWindowExecutionsOutput } from "../shapes/DescribeMaintenanceWindowExecutionsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMaintenanceWindowExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowExecutionsInput
  },
  output: {
    shape: DescribeMaintenanceWindowExecutionsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
