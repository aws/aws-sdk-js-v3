import { GetSegmentsInput } from "./GetSegmentsInput";
import { GetSegmentsOutput } from "./GetSegmentsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSegments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSegments",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/segments"
  },
  input: {
    shape: GetSegmentsInput
  },
  output: {
    shape: GetSegmentsOutput
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
