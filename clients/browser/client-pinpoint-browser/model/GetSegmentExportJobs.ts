import { GetSegmentExportJobsInput } from "./GetSegmentExportJobsInput";
import { GetSegmentExportJobsOutput } from "./GetSegmentExportJobsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSegmentExportJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSegmentExportJobs",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/segments/{segment-id}/jobs/export"
  },
  input: {
    shape: GetSegmentExportJobsInput
  },
  output: {
    shape: GetSegmentExportJobsOutput
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
