import { GetWorkflowExecutionHistoryInput } from "../shapes/GetWorkflowExecutionHistoryInput";
import { GetWorkflowExecutionHistoryOutput } from "../shapes/GetWorkflowExecutionHistoryOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
