import { PutEventsInput } from "../shapes/PutEventsInput";
import { PutEventsOutput } from "../shapes/PutEventsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEvents",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/events"
  },
  input: {
    shape: PutEventsInput
  },
  output: {
    shape: PutEventsOutput
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
