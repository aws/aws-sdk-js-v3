import { PutEventsInput } from "./PutEventsInput";
import { PutEventsOutput } from "./PutEventsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
