import { GetApplicationInput } from "./GetApplicationInput";
import { GetApplicationOutput } from "./GetApplicationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
