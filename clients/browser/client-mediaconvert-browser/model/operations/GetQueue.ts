import { GetQueueInput } from "../shapes/GetQueueInput";
import { GetQueueOutput } from "../shapes/GetQueueOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
