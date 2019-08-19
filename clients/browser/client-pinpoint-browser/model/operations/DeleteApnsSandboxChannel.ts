import { DeleteApnsSandboxChannelInput } from "../shapes/DeleteApnsSandboxChannelInput";
import { DeleteApnsSandboxChannelOutput } from "../shapes/DeleteApnsSandboxChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApnsSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApnsSandboxChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/apns_sandbox"
  },
  input: {
    shape: DeleteApnsSandboxChannelInput
  },
  output: {
    shape: DeleteApnsSandboxChannelOutput
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
