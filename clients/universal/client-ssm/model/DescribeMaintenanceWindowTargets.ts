import { DescribeMaintenanceWindowTargetsInput } from "./DescribeMaintenanceWindowTargetsInput";
import { DescribeMaintenanceWindowTargetsOutput } from "./DescribeMaintenanceWindowTargetsOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeMaintenanceWindowTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowTargetsInput
  },
  output: {
    shape: DescribeMaintenanceWindowTargetsOutput
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
