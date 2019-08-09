import { StopQueryExecutionInput } from "./StopQueryExecutionInput";
import { StopQueryExecutionOutput } from "./StopQueryExecutionOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopQueryExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopQueryExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopQueryExecutionInput
  },
  output: {
    shape: StopQueryExecutionOutput
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
