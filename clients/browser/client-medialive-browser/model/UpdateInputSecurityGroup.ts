import { UpdateInputSecurityGroupInput } from "./UpdateInputSecurityGroupInput";
import { UpdateInputSecurityGroupOutput } from "./UpdateInputSecurityGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateInputSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInputSecurityGroup",
  http: {
    method: "PUT",
    requestUri: "/prod/inputSecurityGroups/{inputSecurityGroupId}"
  },
  input: {
    shape: UpdateInputSecurityGroupInput
  },
  output: {
    shape: UpdateInputSecurityGroupOutput
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
      shape: ConflictException
    }
  ]
};
