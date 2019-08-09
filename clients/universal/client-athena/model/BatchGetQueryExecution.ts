import { BatchGetQueryExecutionInput } from "./BatchGetQueryExecutionInput";
import { BatchGetQueryExecutionOutput } from "./BatchGetQueryExecutionOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetQueryExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetQueryExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetQueryExecutionInput
  },
  output: {
    shape: BatchGetQueryExecutionOutput
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
