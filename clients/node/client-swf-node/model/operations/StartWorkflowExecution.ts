import { StartWorkflowExecutionInput } from "../shapes/StartWorkflowExecutionInput";
import { StartWorkflowExecutionOutput } from "../shapes/StartWorkflowExecutionOutput";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { TypeDeprecatedFault } from "../shapes/TypeDeprecatedFault";
import { WorkflowExecutionAlreadyStartedFault } from "../shapes/WorkflowExecutionAlreadyStartedFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { DefaultUndefinedFault } from "../shapes/DefaultUndefinedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
