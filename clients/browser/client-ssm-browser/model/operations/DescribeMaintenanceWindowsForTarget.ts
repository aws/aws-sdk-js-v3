import { DescribeMaintenanceWindowsForTargetInput } from "../shapes/DescribeMaintenanceWindowsForTargetInput";
import { DescribeMaintenanceWindowsForTargetOutput } from "../shapes/DescribeMaintenanceWindowsForTargetOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMaintenanceWindowsForTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowsForTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowsForTargetInput
  },
  output: {
    shape: DescribeMaintenanceWindowsForTargetOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
