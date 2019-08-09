import { StartWorkflowExecutionInput } from "./StartWorkflowExecutionInput";
import { StartWorkflowExecutionOutput } from "./StartWorkflowExecutionOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeDeprecatedFault } from "./TypeDeprecatedFault";
import { WorkflowExecutionAlreadyStartedFault } from "./WorkflowExecutionAlreadyStartedFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { DefaultUndefinedFault } from "./DefaultUndefinedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartWorkflowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartWorkflowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartWorkflowExecutionInput
  },
  output: {
    shape: StartWorkflowExecutionOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: TypeDeprecatedFault
    },
    {
      shape: WorkflowExecutionAlreadyStartedFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: OperationNotPermittedFault
    },
    {
      shape: DefaultUndefinedFault
    }
  ]
};
