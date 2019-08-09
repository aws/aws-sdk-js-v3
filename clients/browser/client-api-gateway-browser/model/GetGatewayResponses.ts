import { GetGatewayResponsesInput } from "./GetGatewayResponsesInput";
import { GetGatewayResponsesOutput } from "./GetGatewayResponsesOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
