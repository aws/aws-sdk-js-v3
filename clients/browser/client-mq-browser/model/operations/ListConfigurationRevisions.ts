import { ListConfigurationRevisionsInput } from "../shapes/ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "../shapes/ListConfigurationRevisionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConfigurationRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurationRevisions",
  http: {
    method: "GET",
    requestUri: "/v1/configurations/{configuration-id}/revisions"
  },
  input: {
    shape: ListConfigurationRevisionsInput
  },
  output: {
    shape: ListConfigurationRevisionsOutput
  },
  errors: [
    {
      shape: NotFoundException
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
