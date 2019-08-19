import { ListClusterOperationsInput } from "../shapes/ListClusterOperationsInput";
import { ListClusterOperationsOutput } from "../shapes/ListClusterOperationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListClusterOperations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListClusterOperations",
  http: {
    method: "GET",
    requestUri: "/v1/clusters/{clusterArn}/operations"
  },
  input: {
    shape: ListClusterOperationsInput
  },
  output: {
    shape: ListClusterOperationsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ForbiddenException
    }
  ]
};
