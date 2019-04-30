import { UpdateApnsSandboxChannelInput } from "./UpdateApnsSandboxChannelInput";
import { UpdateApnsSandboxChannelOutput } from "./UpdateApnsSandboxChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApnsSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApnsSandboxChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/apns_sandbox"
  },
  input: {
    shape: UpdateApnsSandboxChannelInput
  },
  output: {
    shape: UpdateApnsSandboxChannelOutput
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
