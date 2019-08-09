import { GetGatewayResponseInput } from "./GetGatewayResponseInput";
import { GetGatewayResponseOutput } from "./GetGatewayResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
