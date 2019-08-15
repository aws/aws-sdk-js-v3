import { RequestCancelWorkflowExecutionInput } from "../shapes/RequestCancelWorkflowExecutionInput";
import { RequestCancelWorkflowExecutionOutput } from "../shapes/RequestCancelWorkflowExecutionOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RequestCancelWorkflowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestCancelWorkflowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestCancelWorkflowExecutionInput
  },
  output: {
    shape: RequestCancelWorkflowExecutionOutput
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
