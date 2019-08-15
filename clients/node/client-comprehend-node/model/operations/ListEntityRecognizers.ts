import { ListEntityRecognizersInput } from "../shapes/ListEntityRecognizersInput";
import { ListEntityRecognizersOutput } from "../shapes/ListEntityRecognizersOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidFilterException } from "../shapes/InvalidFilterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
