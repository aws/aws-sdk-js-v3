import { GetSegmentImportJobsInput } from "../shapes/GetSegmentImportJobsInput";
import { GetSegmentImportJobsOutput } from "../shapes/GetSegmentImportJobsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
