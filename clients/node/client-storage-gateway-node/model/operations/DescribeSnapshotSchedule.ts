import { DescribeSnapshotScheduleInput } from "../shapes/DescribeSnapshotScheduleInput";
import { DescribeSnapshotScheduleOutput } from "../shapes/DescribeSnapshotScheduleOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSnapshotSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshotSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotScheduleInput
  },
  output: {
    shape: DescribeSnapshotScheduleOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
