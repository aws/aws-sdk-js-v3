import { DeleteQueueInput } from "../shapes/DeleteQueueInput";
import { DeleteQueueOutput } from "../shapes/DeleteQueueOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
