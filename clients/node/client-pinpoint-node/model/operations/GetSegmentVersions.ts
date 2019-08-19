import { GetSegmentVersionsInput } from "../shapes/GetSegmentVersionsInput";
import { GetSegmentVersionsOutput } from "../shapes/GetSegmentVersionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSegmentVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSegmentVersions",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/segments/{segment-id}/versions"
  },
  input: {
    shape: GetSegmentVersionsInput
  },
  output: {
    shape: GetSegmentVersionsOutput
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
