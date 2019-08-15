import { GetSegmentsInput } from "../shapes/GetSegmentsInput";
import { GetSegmentsOutput } from "../shapes/GetSegmentsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
