import { ListTypesInput } from "./ListTypesInput";
import { ListTypesOutput } from "./ListTypesOutput";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
