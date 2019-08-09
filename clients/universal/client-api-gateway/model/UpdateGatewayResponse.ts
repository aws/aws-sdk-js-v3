import { UpdateGatewayResponseInput } from "./UpdateGatewayResponseInput";
import { UpdateGatewayResponseOutput } from "./UpdateGatewayResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
