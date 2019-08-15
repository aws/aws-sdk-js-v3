import { ListStreamsInput } from "../shapes/ListStreamsInput";
import { ListStreamsOutput } from "../shapes/ListStreamsOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStreams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreams",
  http: {
    method: "POST",
    requestUri: "/listStreams"
  },
  input: {
    shape: ListStreamsInput
  },
  output: {
    shape: ListStreamsOutput
  },
  errors: [
    {
      shape: ClientLimitExceededException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
