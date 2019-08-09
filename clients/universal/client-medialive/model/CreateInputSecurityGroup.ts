import { CreateInputSecurityGroupInput } from "./CreateInputSecurityGroupInput";
import { CreateInputSecurityGroupOutput } from "./CreateInputSecurityGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
