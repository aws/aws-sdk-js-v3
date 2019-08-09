import { ListNodesInput } from "./ListNodesInput";
import { ListNodesOutput } from "./ListNodesOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
