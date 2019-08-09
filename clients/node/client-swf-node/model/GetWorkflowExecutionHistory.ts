import { GetWorkflowExecutionHistoryInput } from "./GetWorkflowExecutionHistoryInput";
import { GetWorkflowExecutionHistoryOutput } from "./GetWorkflowExecutionHistoryOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetWorkflowExecutionHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkflowExecutionHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkflowExecutionHistoryInput
  },
  output: {
    shape: GetWorkflowExecutionHistoryOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
