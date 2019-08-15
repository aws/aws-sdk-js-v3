import { GetExecutionHistoryInput } from "../shapes/GetExecutionHistoryInput";
import { GetExecutionHistoryOutput } from "../shapes/GetExecutionHistoryOutput";
import { ExecutionDoesNotExist } from "../shapes/ExecutionDoesNotExist";
import { InvalidArn } from "../shapes/InvalidArn";
import { InvalidToken } from "../shapes/InvalidToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetExecutionHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetExecutionHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetExecutionHistoryInput
  },
  output: {
    shape: GetExecutionHistoryOutput
  },
  errors: [
    {
      shape: ExecutionDoesNotExist
    },
    {
      shape: InvalidArn
    },
    {
      shape: InvalidToken
    }
  ]
};
