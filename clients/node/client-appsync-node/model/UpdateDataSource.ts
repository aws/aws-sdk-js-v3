import { UpdateDataSourceInput } from "./UpdateDataSourceInput";
import { UpdateDataSourceOutput } from "./UpdateDataSourceOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDataSource",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/datasources/{name}"
  },
  input: {
    shape: UpdateDataSourceInput
  },
  output: {
    shape: UpdateDataSourceOutput
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
