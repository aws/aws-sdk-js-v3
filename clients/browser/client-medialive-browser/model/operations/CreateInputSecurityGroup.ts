import { CreateInputSecurityGroupInput } from "../shapes/CreateInputSecurityGroupInput";
import { CreateInputSecurityGroupOutput } from "../shapes/CreateInputSecurityGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInputSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInputSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/prod/inputSecurityGroups"
  },
  input: {
    shape: CreateInputSecurityGroupInput
  },
  output: {
    shape: CreateInputSecurityGroupOutput
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
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
