import { CreateConfigurationInput } from "../shapes/CreateConfigurationInput";
import { CreateConfigurationOutput } from "../shapes/CreateConfigurationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfiguration",
  http: {
    method: "POST",
    requestUri: "/v1/configurations"
  },
  input: {
    shape: CreateConfigurationInput
  },
  output: {
    shape: CreateConfigurationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
