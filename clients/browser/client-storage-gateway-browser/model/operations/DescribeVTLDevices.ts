import { DescribeVTLDevicesInput } from "../shapes/DescribeVTLDevicesInput";
import { DescribeVTLDevicesOutput } from "../shapes/DescribeVTLDevicesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVTLDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVTLDevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVTLDevicesInput
  },
  output: {
    shape: DescribeVTLDevicesOutput
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
