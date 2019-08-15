import { GetSegmentInput } from "../shapes/GetSegmentInput";
import { GetSegmentOutput } from "../shapes/GetSegmentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
