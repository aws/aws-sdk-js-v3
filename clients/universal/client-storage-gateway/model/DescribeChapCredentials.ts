import { DescribeChapCredentialsInput } from "./DescribeChapCredentialsInput";
import { DescribeChapCredentialsOutput } from "./DescribeChapCredentialsOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
