import { StopQueryExecutionInput } from "../shapes/StopQueryExecutionInput";
import { StopQueryExecutionOutput } from "../shapes/StopQueryExecutionOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
