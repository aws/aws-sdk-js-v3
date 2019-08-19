import { GetSegmentExportJobsInput } from "../shapes/GetSegmentExportJobsInput";
import { GetSegmentExportJobsOutput } from "../shapes/GetSegmentExportJobsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
