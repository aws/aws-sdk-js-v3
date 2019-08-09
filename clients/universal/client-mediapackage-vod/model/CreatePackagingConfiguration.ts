import { CreatePackagingConfigurationInput } from "./CreatePackagingConfigurationInput";
import { CreatePackagingConfigurationOutput } from "./CreatePackagingConfigurationOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
