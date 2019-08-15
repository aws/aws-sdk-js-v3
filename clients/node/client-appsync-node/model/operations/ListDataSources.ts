import { ListDataSourcesInput } from "../shapes/ListDataSourcesInput";
import { ListDataSourcesOutput } from "../shapes/ListDataSourcesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
