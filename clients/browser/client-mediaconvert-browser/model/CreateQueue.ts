import { CreateQueueInput } from "./CreateQueueInput";
import { CreateQueueOutput } from "./CreateQueueOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
