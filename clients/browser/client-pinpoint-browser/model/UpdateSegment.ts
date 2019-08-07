import { UpdateSegmentInput } from "./UpdateSegmentInput";
import { UpdateSegmentOutput } from "./UpdateSegmentOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
