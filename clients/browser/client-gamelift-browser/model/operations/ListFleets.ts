import { ListFleetsInput } from "../shapes/ListFleetsInput";
import { ListFleetsOutput } from "../shapes/ListFleetsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFleets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListFleetsInput
  },
  output: {
    shape: ListFleetsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
