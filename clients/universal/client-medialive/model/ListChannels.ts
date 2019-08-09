import { ListChannelsInput } from "./ListChannelsInput";
import { ListChannelsOutput } from "./ListChannelsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListChannels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListChannels",
  http: {
    method: "GET",
    requestUri: "/prod/channels"
  },
  input: {
    shape: ListChannelsInput
  },
  output: {
    shape: ListChannelsOutput
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
