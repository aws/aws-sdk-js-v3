import { ListQueryExecutionsInput } from "./ListQueryExecutionsInput";
import { ListQueryExecutionsOutput } from "./ListQueryExecutionsOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListQueryExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListQueryExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListQueryExecutionsInput
  },
  output: {
    shape: ListQueryExecutionsOutput
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
