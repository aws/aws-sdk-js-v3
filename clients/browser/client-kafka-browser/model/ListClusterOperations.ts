import { ListClusterOperationsInput } from "./ListClusterOperationsInput";
import { ListClusterOperationsOutput } from "./ListClusterOperationsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
