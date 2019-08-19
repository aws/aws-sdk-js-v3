import { GetQueryExecutionInput } from "../shapes/GetQueryExecutionInput";
import { GetQueryExecutionOutput } from "../shapes/GetQueryExecutionOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
