import { GetSegmentInput } from "./GetSegmentInput";
import { GetSegmentOutput } from "./GetSegmentOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSegment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSegment",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/segments/{segment-id}"
  },
  input: {
    shape: GetSegmentInput
  },
  output: {
    shape: GetSegmentOutput
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
