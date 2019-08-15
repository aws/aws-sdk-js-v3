import { ListQueryExecutionsInput } from "../shapes/ListQueryExecutionsInput";
import { ListQueryExecutionsOutput } from "../shapes/ListQueryExecutionsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
