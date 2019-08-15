import { ListStreamsInput } from "../shapes/ListStreamsInput";
import { ListStreamsOutput } from "../shapes/ListStreamsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStreams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreams",
  http: {
    method: "GET",
    requestUri: "/streams"
  },
  input: {
    shape: ListStreamsInput
  },
  output: {
    shape: ListStreamsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
