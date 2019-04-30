import { DeleteBaiduChannelInput } from "./DeleteBaiduChannelInput";
import { DeleteBaiduChannelOutput } from "./DeleteBaiduChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
