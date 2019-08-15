import { CreateQueueInput } from "../shapes/CreateQueueInput";
import { CreateQueueOutput } from "../shapes/CreateQueueOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateQueue",
  http: {
    method: "POST",
    requestUri: "/2017-08-29/queues"
  },
  input: {
    shape: CreateQueueInput
  },
  output: {
    shape: CreateQueueOutput
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
