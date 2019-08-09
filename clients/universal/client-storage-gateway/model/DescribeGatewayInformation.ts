import { DescribeGatewayInformationInput } from "./DescribeGatewayInformationInput";
import { DescribeGatewayInformationOutput } from "./DescribeGatewayInformationOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeGatewayInformation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGatewayInformation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGatewayInformationInput
  },
  output: {
    shape: DescribeGatewayInformationOutput
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
