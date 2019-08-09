import { ListPackagingConfigurationsInput } from "./ListPackagingConfigurationsInput";
import { ListPackagingConfigurationsOutput } from "./ListPackagingConfigurationsOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPackagingConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPackagingConfigurations",
  http: {
    method: "GET",
    requestUri: "/packaging_configurations"
  },
  input: {
    shape: ListPackagingConfigurationsInput
  },
  output: {
    shape: ListPackagingConfigurationsOutput
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
