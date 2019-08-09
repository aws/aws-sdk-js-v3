import { GetDataSourceInput } from "./GetDataSourceInput";
import { GetDataSourceOutput } from "./GetDataSourceOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataSource",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/datasources/{name}"
  },
  input: {
    shape: GetDataSourceInput
  },
  output: {
    shape: GetDataSourceOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConcurrentModificationException
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
