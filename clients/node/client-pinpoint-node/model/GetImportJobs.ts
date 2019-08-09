import { GetImportJobsInput } from "./GetImportJobsInput";
import { GetImportJobsOutput } from "./GetImportJobsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
