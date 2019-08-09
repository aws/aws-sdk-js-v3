import { DescribeMaintenanceStartTimeInput } from "./DescribeMaintenanceStartTimeInput";
import { DescribeMaintenanceStartTimeOutput } from "./DescribeMaintenanceStartTimeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeMaintenanceStartTime: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMaintenanceStartTime",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMaintenanceStartTimeInput
  },
  output: {
    shape: DescribeMaintenanceStartTimeOutput
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
