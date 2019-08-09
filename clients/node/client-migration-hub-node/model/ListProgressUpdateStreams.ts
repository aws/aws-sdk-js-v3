import { ListProgressUpdateStreamsInput } from "./ListProgressUpdateStreamsInput";
import { ListProgressUpdateStreamsOutput } from "./ListProgressUpdateStreamsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
