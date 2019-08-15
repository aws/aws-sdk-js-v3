import { ListConfigurationsInput } from "../shapes/ListConfigurationsInput";
import { ListConfigurationsOutput } from "../shapes/ListConfigurationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurations",
  http: {
    method: "GET",
    requestUri: "/v1/configurations"
  },
  input: {
    shape: ListConfigurationsInput
  },
  output: {
    shape: ListConfigurationsOutput
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
    }
  ]
};
