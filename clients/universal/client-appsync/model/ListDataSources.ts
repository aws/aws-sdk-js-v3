import { ListDataSourcesInput } from "./ListDataSourcesInput";
import { ListDataSourcesOutput } from "./ListDataSourcesOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDataSources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDataSources",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/datasources"
  },
  input: {
    shape: ListDataSourcesInput
  },
  output: {
    shape: ListDataSourcesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
