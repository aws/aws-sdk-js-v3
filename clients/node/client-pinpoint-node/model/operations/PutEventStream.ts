import { PutEventStreamInput } from "../shapes/PutEventStreamInput";
import { PutEventStreamOutput } from "../shapes/PutEventStreamOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEventStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEventStream",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/eventstream"
  },
  input: {
    shape: PutEventStreamInput
  },
  output: {
    shape: PutEventStreamOutput
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
