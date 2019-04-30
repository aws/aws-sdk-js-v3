import { GetBaiduChannelInput } from "./GetBaiduChannelInput";
import { GetBaiduChannelOutput } from "./GetBaiduChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBaiduChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBaiduChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/baidu"
  },
  input: {
    shape: GetBaiduChannelInput
  },
  output: {
    shape: GetBaiduChannelOutput
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
