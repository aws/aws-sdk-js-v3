import { ListInputSecurityGroupsInput } from "./ListInputSecurityGroupsInput";
import { ListInputSecurityGroupsOutput } from "./ListInputSecurityGroupsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
