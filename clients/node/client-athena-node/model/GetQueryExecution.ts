import { GetQueryExecutionInput } from "./GetQueryExecutionInput";
import { GetQueryExecutionOutput } from "./GetQueryExecutionOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetQueryExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQueryExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetQueryExecutionInput
  },
  output: {
    shape: GetQueryExecutionOutput
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
