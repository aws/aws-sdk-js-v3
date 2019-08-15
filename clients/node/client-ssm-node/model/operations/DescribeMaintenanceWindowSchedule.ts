import { DescribeMaintenanceWindowScheduleInput } from "../shapes/DescribeMaintenanceWindowScheduleInput";
import { DescribeMaintenanceWindowScheduleOutput } from "../shapes/DescribeMaintenanceWindowScheduleOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMaintenanceWindowSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceWindowSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceWindowScheduleInput
  },
  output: {
    shape: DescribeMaintenanceWindowScheduleOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: DoesNotExistException
    }
  ]
};
