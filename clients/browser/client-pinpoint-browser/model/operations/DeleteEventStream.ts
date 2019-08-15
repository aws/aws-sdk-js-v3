import { DeleteEventStreamInput } from "../shapes/DeleteEventStreamInput";
import { DeleteEventStreamOutput } from "../shapes/DeleteEventStreamOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEventStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEventStream",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/eventstream"
  },
  input: {
    shape: DeleteEventStreamInput
  },
  output: {
    shape: DeleteEventStreamOutput
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
