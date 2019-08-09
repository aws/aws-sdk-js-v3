import { DescribeMaintenanceWindowScheduleInput } from "./DescribeMaintenanceWindowScheduleInput";
import { DescribeMaintenanceWindowScheduleOutput } from "./DescribeMaintenanceWindowScheduleOutput";
import { InternalServerError } from "./InternalServerError";
import { DoesNotExistException } from "./DoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
