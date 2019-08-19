import { DeleteInputSecurityGroupInput } from "../shapes/DeleteInputSecurityGroupInput";
import { DeleteInputSecurityGroupOutput } from "../shapes/DeleteInputSecurityGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInputSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInputSecurityGroup",
  http: {
    method: "DELETE",
    requestUri: "/prod/inputSecurityGroups/{inputSecurityGroupId}"
  },
  input: {
    shape: DeleteInputSecurityGroupInput
  },
  output: {
    shape: DeleteInputSecurityGroupOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadGatewayException
    },
    {
      shape: NotFoundException
    },
    {
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
