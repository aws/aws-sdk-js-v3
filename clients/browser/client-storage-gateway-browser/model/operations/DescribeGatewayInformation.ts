import { DescribeGatewayInformationInput } from "../shapes/DescribeGatewayInformationInput";
import { DescribeGatewayInformationOutput } from "../shapes/DescribeGatewayInformationOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
