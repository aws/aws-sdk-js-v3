import { DescribeVTLDevicesInput } from "./DescribeVTLDevicesInput";
import { DescribeVTLDevicesOutput } from "./DescribeVTLDevicesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
