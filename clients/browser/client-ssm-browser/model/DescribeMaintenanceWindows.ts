import { DescribeMaintenanceWindowsInput } from "./DescribeMaintenanceWindowsInput";
import { DescribeMaintenanceWindowsOutput } from "./DescribeMaintenanceWindowsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
