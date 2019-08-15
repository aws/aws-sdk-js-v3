import { ListFleetsInput } from "../shapes/ListFleetsInput";
import { ListFleetsOutput } from "../shapes/ListFleetsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFleets",
  http: {
    method: "POST",
    requestUri: "/listFleets"
  },
  input: {
    shape: ListFleetsInput
  },
  output: {
    shape: ListFleetsOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
