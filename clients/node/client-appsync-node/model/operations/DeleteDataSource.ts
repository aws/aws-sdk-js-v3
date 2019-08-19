import { DeleteDataSourceInput } from "../shapes/DeleteDataSourceInput";
import { DeleteDataSourceOutput } from "../shapes/DeleteDataSourceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDataSource",
  http: {
    method: "DELETE",
    requestUri: "/v1/apis/{apiId}/datasources/{name}"
  },
  input: {
    shape: DeleteDataSourceInput
  },
  output: {
    shape: DeleteDataSourceOutput
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
