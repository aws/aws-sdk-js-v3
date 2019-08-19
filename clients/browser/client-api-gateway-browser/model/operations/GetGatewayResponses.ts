import { GetGatewayResponsesInput } from "../shapes/GetGatewayResponsesInput";
import { GetGatewayResponsesOutput } from "../shapes/GetGatewayResponsesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGatewayResponses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGatewayResponses",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/gatewayresponses"
  },
  input: {
    shape: GetGatewayResponsesInput
  },
  output: {
    shape: GetGatewayResponsesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
