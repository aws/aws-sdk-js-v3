import { GetImportJobInput } from "../shapes/GetImportJobInput";
import { GetImportJobOutput } from "../shapes/GetImportJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetImportJob",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/jobs/import/{job-id}"
  },
  input: {
    shape: GetImportJobInput
  },
  output: {
    shape: GetImportJobOutput
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
