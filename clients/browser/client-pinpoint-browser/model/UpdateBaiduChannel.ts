import { UpdateBaiduChannelInput } from "./UpdateBaiduChannelInput";
import { UpdateBaiduChannelOutput } from "./UpdateBaiduChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
