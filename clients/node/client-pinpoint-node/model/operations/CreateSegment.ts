import { CreateSegmentInput } from "../shapes/CreateSegmentInput";
import { CreateSegmentOutput } from "../shapes/CreateSegmentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSegment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSegment",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/segments"
  },
  input: {
    shape: CreateSegmentInput
  },
  output: {
    shape: CreateSegmentOutput
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
