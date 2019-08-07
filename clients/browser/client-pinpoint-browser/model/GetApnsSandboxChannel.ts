import { GetApnsSandboxChannelInput } from "./GetApnsSandboxChannelInput";
import { GetApnsSandboxChannelOutput } from "./GetApnsSandboxChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetApnsSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApnsSandboxChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/apns_sandbox"
  },
  input: {
    shape: GetApnsSandboxChannelInput
  },
  output: {
    shape: GetApnsSandboxChannelOutput
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
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
