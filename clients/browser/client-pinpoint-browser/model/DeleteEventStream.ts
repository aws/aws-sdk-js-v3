import { DeleteEventStreamInput } from "./DeleteEventStreamInput";
import { DeleteEventStreamOutput } from "./DeleteEventStreamOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
