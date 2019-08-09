import { DescribeMaintenanceWindowExecutionsInput } from "./DescribeMaintenanceWindowExecutionsInput";
import { DescribeMaintenanceWindowExecutionsOutput } from "./DescribeMaintenanceWindowExecutionsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
