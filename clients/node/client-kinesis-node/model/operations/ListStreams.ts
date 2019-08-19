import { ListStreamsInput } from "../shapes/ListStreamsInput";
import { ListStreamsOutput } from "../shapes/ListStreamsOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStreams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreams",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStreamsInput
  },
  output: {
    shape: ListStreamsOutput
  },
  errors: [
    {
      shape: LimitExceededException
    }
  ]
};
