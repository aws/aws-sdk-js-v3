import { DeleteInputSecurityGroupInput } from "./DeleteInputSecurityGroupInput";
import { DeleteInputSecurityGroupOutput } from "./DeleteInputSecurityGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
