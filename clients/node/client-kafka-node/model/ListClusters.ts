import { ListClustersInput } from "./ListClustersInput";
import { ListClustersOutput } from "./ListClustersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
