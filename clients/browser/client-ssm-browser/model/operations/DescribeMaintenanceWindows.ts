import { DescribeMaintenanceWindowsInput } from "../shapes/DescribeMaintenanceWindowsInput";
import { DescribeMaintenanceWindowsOutput } from "../shapes/DescribeMaintenanceWindowsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMaintenanceWindows: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindows",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowsInput
  },
  output: {
    shape: DescribeMaintenanceWindowsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
