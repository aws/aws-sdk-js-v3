import { ListNamedQueriesInput } from "../shapes/ListNamedQueriesInput";
import { ListNamedQueriesOutput } from "../shapes/ListNamedQueriesOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
