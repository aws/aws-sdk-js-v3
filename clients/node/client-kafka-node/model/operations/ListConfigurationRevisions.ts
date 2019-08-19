import { ListConfigurationRevisionsInput } from "../shapes/ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "../shapes/ListConfigurationRevisionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConfigurationRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurationRevisions",
  http: {
    method: "GET",
    requestUri: "/v1/configurations/{arn}/revisions"
  },
  input: {
    shape: ListConfigurationRevisionsInput
  },
  output: {
    shape: ListConfigurationRevisionsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
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
    }
  ]
};
