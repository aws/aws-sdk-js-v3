import { CreateDataSourceInput } from "../shapes/CreateDataSourceInput";
import { CreateDataSourceOutput } from "../shapes/CreateDataSourceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataSource",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/datasources"
  },
  input: {
    shape: CreateDataSourceInput
  },
  output: {
    shape: CreateDataSourceOutput
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
