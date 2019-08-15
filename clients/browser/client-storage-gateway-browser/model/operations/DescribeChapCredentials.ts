import { DescribeChapCredentialsInput } from "../shapes/DescribeChapCredentialsInput";
import { DescribeChapCredentialsOutput } from "../shapes/DescribeChapCredentialsOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeChapCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeChapCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeChapCredentialsInput
  },
  output: {
    shape: DescribeChapCredentialsOutput
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
