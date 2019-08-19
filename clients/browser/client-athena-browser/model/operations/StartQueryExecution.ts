import { StartQueryExecutionInput } from "../shapes/StartQueryExecutionInput";
import { StartQueryExecutionOutput } from "../shapes/StartQueryExecutionOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
