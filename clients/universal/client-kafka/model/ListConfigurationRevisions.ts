import { ListConfigurationRevisionsInput } from "./ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "./ListConfigurationRevisionsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
