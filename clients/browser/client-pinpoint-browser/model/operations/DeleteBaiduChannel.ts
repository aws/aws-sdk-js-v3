import { DeleteBaiduChannelInput } from "../shapes/DeleteBaiduChannelInput";
import { DeleteBaiduChannelOutput } from "../shapes/DeleteBaiduChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBaiduChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBaiduChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/baidu"
  },
  input: {
    shape: DeleteBaiduChannelInput
  },
  output: {
    shape: DeleteBaiduChannelOutput
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
