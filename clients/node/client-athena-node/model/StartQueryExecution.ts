import { StartQueryExecutionInput } from "./StartQueryExecutionInput";
import { StartQueryExecutionOutput } from "./StartQueryExecutionOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartQueryExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartQueryExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartQueryExecutionInput
  },
  output: {
    shape: StartQueryExecutionOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
