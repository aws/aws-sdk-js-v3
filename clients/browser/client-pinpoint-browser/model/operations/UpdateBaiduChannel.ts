import { UpdateBaiduChannelInput } from "../shapes/UpdateBaiduChannelInput";
import { UpdateBaiduChannelOutput } from "../shapes/UpdateBaiduChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBaiduChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBaiduChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/baidu"
  },
  input: {
    shape: UpdateBaiduChannelInput
  },
  output: {
    shape: UpdateBaiduChannelOutput
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
