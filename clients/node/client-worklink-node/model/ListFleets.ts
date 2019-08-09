import { ListFleetsInput } from "./ListFleetsInput";
import { ListFleetsOutput } from "./ListFleetsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
