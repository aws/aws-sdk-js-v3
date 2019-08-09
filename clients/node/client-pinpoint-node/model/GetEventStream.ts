import { GetEventStreamInput } from "./GetEventStreamInput";
import { GetEventStreamOutput } from "./GetEventStreamOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEventStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEventStream",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/eventstream"
  },
  input: {
    shape: GetEventStreamInput
  },
  output: {
    shape: GetEventStreamOutput
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
