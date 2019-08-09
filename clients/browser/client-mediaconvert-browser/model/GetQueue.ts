import { GetQueueInput } from "./GetQueueInput";
import { GetQueueOutput } from "./GetQueueOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQueue",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/queues/{name}"
  },
  input: {
    shape: GetQueueInput
  },
  output: {
    shape: GetQueueOutput
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
