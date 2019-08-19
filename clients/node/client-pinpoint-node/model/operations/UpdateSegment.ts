import { UpdateSegmentInput } from "../shapes/UpdateSegmentInput";
import { UpdateSegmentOutput } from "../shapes/UpdateSegmentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSegment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSegment",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/segments/{segment-id}"
  },
  input: {
    shape: UpdateSegmentInput
  },
  output: {
    shape: UpdateSegmentOutput
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
