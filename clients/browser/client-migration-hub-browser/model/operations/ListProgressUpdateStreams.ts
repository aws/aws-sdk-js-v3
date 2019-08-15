import { ListProgressUpdateStreamsInput } from "../shapes/ListProgressUpdateStreamsInput";
import { ListProgressUpdateStreamsOutput } from "../shapes/ListProgressUpdateStreamsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProgressUpdateStreams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProgressUpdateStreams",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProgressUpdateStreamsInput
  },
  output: {
    shape: ListProgressUpdateStreamsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidInputException
    }
  ]
};
