import { GetExportJobInput } from "./GetExportJobInput";
import { GetExportJobOutput } from "./GetExportJobOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetExportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetExportJob",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/jobs/export/{job-id}"
  },
  input: {
    shape: GetExportJobInput
  },
  output: {
    shape: GetExportJobOutput
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
