import { PutGatewayResponseInput } from "../shapes/PutGatewayResponseInput";
import { PutGatewayResponseOutput } from "../shapes/PutGatewayResponseOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutGatewayResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutGatewayResponse",
  http: {
    method: "PUT",
    requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}"
  },
  input: {
    shape: PutGatewayResponseInput
  },
  output: {
    shape: PutGatewayResponseOutput
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
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
