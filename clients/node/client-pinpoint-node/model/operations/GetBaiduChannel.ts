import { GetBaiduChannelInput } from "../shapes/GetBaiduChannelInput";
import { GetBaiduChannelOutput } from "../shapes/GetBaiduChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
