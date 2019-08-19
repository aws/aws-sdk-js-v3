import { ListTypesInput } from "../shapes/ListTypesInput";
import { ListTypesOutput } from "../shapes/ListTypesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTypes",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/types"
  },
  input: {
    shape: ListTypesInput
  },
  output: {
    shape: ListTypesOutput
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
