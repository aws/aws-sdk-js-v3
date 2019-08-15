import { GetGatewayResponseInput } from "../shapes/GetGatewayResponseInput";
import { GetGatewayResponseOutput } from "../shapes/GetGatewayResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGatewayResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGatewayResponse",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}"
  },
  input: {
    shape: GetGatewayResponseInput
  },
  output: {
    shape: GetGatewayResponseOutput
  },
  errors: [
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
