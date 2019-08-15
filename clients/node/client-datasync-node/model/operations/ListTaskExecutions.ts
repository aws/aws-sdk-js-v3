import { ListTaskExecutionsInput } from "../shapes/ListTaskExecutionsInput";
import { ListTaskExecutionsOutput } from "../shapes/ListTaskExecutionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTaskExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTaskExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTaskExecutionsInput
  },
  output: {
    shape: ListTaskExecutionsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
