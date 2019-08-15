import { DeleteSegmentInput } from "../shapes/DeleteSegmentInput";
import { DeleteSegmentOutput } from "../shapes/DeleteSegmentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSegment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSegment",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/segments/{segment-id}"
  },
  input: {
    shape: DeleteSegmentInput
  },
  output: {
    shape: DeleteSegmentOutput
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
