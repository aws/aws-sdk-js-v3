import { ListStreamsInput } from "./ListStreamsInput";
import { ListStreamsOutput } from "./ListStreamsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
