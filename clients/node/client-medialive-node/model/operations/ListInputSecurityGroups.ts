import { ListInputSecurityGroupsInput } from "../shapes/ListInputSecurityGroupsInput";
import { ListInputSecurityGroupsOutput } from "../shapes/ListInputSecurityGroupsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInputSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInputSecurityGroups",
  http: {
    method: "GET",
    requestUri: "/prod/inputSecurityGroups"
  },
  input: {
    shape: ListInputSecurityGroupsInput
  },
  output: {
    shape: ListInputSecurityGroupsOutput
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
