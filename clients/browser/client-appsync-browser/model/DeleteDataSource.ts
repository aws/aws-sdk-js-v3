import { DeleteDataSourceInput } from "./DeleteDataSourceInput";
import { DeleteDataSourceOutput } from "./DeleteDataSourceOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
