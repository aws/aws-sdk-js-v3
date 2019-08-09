import { ListEntityRecognizersInput } from "./ListEntityRecognizersInput";
import { ListEntityRecognizersOutput } from "./ListEntityRecognizersOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEntityRecognizers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEntityRecognizers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEntityRecognizersInput
  },
  output: {
    shape: ListEntityRecognizersOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidFilterException
    },
    {
      shape: InternalServerException
    }
  ]
};
