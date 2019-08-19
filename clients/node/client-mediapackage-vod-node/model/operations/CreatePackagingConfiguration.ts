import { CreatePackagingConfigurationInput } from "../shapes/CreatePackagingConfigurationInput";
import { CreatePackagingConfigurationOutput } from "../shapes/CreatePackagingConfigurationOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePackagingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePackagingConfiguration",
  http: {
    method: "POST",
    requestUri: "/packaging_configurations"
  },
  input: {
    shape: CreatePackagingConfigurationInput
  },
  output: {
    shape: CreatePackagingConfigurationOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
