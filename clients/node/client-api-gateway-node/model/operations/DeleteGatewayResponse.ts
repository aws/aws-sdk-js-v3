import { DeleteGatewayResponseInput } from "../shapes/DeleteGatewayResponseInput";
import { DeleteGatewayResponseOutput } from "../shapes/DeleteGatewayResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGatewayResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGatewayResponse",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}"
  },
  input: {
    shape: DeleteGatewayResponseInput
  },
  output: {
    shape: DeleteGatewayResponseOutput
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
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
