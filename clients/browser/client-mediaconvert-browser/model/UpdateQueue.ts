import { UpdateQueueInput } from "./UpdateQueueInput";
import { UpdateQueueOutput } from "./UpdateQueueOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateQueue",
  http: {
    method: "PUT",
    requestUri: "/2017-08-29/queues/{name}"
  },
  input: {
    shape: UpdateQueueInput
  },
  output: {
    shape: UpdateQueueOutput
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
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
