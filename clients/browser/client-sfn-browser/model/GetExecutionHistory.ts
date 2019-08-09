import { GetExecutionHistoryInput } from "./GetExecutionHistoryInput";
import { GetExecutionHistoryOutput } from "./GetExecutionHistoryOutput";
import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
import { InvalidToken } from "./InvalidToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
