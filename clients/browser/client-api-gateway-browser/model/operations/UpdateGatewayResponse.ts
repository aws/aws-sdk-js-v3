import { UpdateGatewayResponseInput } from "../shapes/UpdateGatewayResponseInput";
import { UpdateGatewayResponseOutput } from "../shapes/UpdateGatewayResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGatewayResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGatewayResponse",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}"
  },
  input: {
    shape: UpdateGatewayResponseInput
  },
  output: {
    shape: UpdateGatewayResponseOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
