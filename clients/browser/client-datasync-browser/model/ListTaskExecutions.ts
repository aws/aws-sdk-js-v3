import { ListTaskExecutionsInput } from "./ListTaskExecutionsInput";
import { ListTaskExecutionsOutput } from "./ListTaskExecutionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
