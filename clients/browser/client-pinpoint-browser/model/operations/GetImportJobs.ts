import { GetImportJobsInput } from "../shapes/GetImportJobsInput";
import { GetImportJobsOutput } from "../shapes/GetImportJobsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetImportJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetImportJobs",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/jobs/import"
  },
  input: {
    shape: GetImportJobsInput
  },
  output: {
    shape: GetImportJobsOutput
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
