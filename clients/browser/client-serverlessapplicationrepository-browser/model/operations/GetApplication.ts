import { GetApplicationInput } from "../shapes/GetApplicationInput";
import { GetApplicationOutput } from "../shapes/GetApplicationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApplication",
  http: {
    method: "GET",
    requestUri: "/applications/{applicationId}"
  },
  input: {
    shape: GetApplicationInput
  },
  output: {
    shape: GetApplicationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
