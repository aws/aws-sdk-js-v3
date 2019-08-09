import { ListNamedQueriesInput } from "./ListNamedQueriesInput";
import { ListNamedQueriesOutput } from "./ListNamedQueriesOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListNamedQueries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNamedQueries",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListNamedQueriesInput
  },
  output: {
    shape: ListNamedQueriesOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
