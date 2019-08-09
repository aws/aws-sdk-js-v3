import { ListQueuesInput } from "./ListQueuesInput";
import { ListQueuesOutput } from "./ListQueuesOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListQueues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListQueues",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/queues"
  },
  input: {
    shape: ListQueuesInput
  },
  output: {
    shape: ListQueuesOutput
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
