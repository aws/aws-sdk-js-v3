import { PutGatewayResponseInput } from "./PutGatewayResponseInput";
import { PutGatewayResponseOutput } from "./PutGatewayResponseOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
