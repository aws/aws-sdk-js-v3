import { DeleteQueueInput } from "./DeleteQueueInput";
import { DeleteQueueOutput } from "./DeleteQueueOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteQueue",
  http: {
    method: "DELETE",
    requestUri: "/2017-08-29/queues/{name}"
  },
  input: {
    shape: DeleteQueueInput
  },
  output: {
    shape: DeleteQueueOutput
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
