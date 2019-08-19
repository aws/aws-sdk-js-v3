import { GetDataSourceInput } from "../shapes/GetDataSourceInput";
import { GetDataSourceOutput } from "../shapes/GetDataSourceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
