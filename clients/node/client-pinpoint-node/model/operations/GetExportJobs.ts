import { GetExportJobsInput } from "../shapes/GetExportJobsInput";
import { GetExportJobsOutput } from "../shapes/GetExportJobsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetExportJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetExportJobs",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/jobs/export"
  },
  input: {
    shape: GetExportJobsInput
  },
  output: {
    shape: GetExportJobsOutput
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
