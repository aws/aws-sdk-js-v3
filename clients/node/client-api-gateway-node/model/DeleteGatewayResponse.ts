import { DeleteGatewayResponseInput } from "./DeleteGatewayResponseInput";
import { DeleteGatewayResponseOutput } from "./DeleteGatewayResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
