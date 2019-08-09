import { ListConfigurationRevisionsInput } from "./ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "./ListConfigurationRevisionsOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
