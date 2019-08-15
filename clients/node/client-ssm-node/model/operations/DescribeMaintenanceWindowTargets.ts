import { DescribeMaintenanceWindowTargetsInput } from "../shapes/DescribeMaintenanceWindowTargetsInput";
import { DescribeMaintenanceWindowTargetsOutput } from "../shapes/DescribeMaintenanceWindowTargetsOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
