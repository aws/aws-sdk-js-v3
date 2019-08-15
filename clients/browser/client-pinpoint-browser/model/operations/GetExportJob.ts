import { GetExportJobInput } from "../shapes/GetExportJobInput";
import { GetExportJobOutput } from "../shapes/GetExportJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
