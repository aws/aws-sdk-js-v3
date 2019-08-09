import { CreateDataSourceInput } from "./CreateDataSourceInput";
import { CreateDataSourceOutput } from "./CreateDataSourceOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
