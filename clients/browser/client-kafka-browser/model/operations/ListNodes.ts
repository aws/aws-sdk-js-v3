import { ListNodesInput } from "../shapes/ListNodesInput";
import { ListNodesOutput } from "../shapes/ListNodesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListNodes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNodes",
  http: {
    method: "GET",
    requestUri: "/v1/clusters/{clusterArn}/nodes"
  },
  input: {
    shape: ListNodesInput
  },
  output: {
    shape: ListNodesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
