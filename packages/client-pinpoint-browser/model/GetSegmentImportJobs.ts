import { GetSegmentImportJobsInput } from "./GetSegmentImportJobsInput";
import { GetSegmentImportJobsOutput } from "./GetSegmentImportJobsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSegmentImportJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSegmentImportJobs",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/segments/{segment-id}/jobs/import"
  },
  input: {
    shape: GetSegmentImportJobsInput
  },
  output: {
    shape: GetSegmentImportJobsOutput
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
