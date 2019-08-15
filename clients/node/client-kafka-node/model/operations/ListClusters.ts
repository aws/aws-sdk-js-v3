import { ListClustersInput } from "../shapes/ListClustersInput";
import { ListClustersOutput } from "../shapes/ListClustersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListClusters",
  http: {
    method: "GET",
    requestUri: "/v1/clusters"
  },
  input: {
    shape: ListClustersInput
  },
  output: {
    shape: ListClustersOutput
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
