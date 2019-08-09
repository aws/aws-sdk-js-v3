import { StopAutomationExecutionInput } from "./StopAutomationExecutionInput";
import { StopAutomationExecutionOutput } from "./StopAutomationExecutionOutput";
import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { InvalidAutomationStatusUpdateException } from "./InvalidAutomationStatusUpdateException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopAutomationExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopAutomationExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopAutomationExecutionInput
  },
  output: {
    shape: StopAutomationExecutionOutput
  },
  errors: [
    {
      shape: AutomationExecutionNotFoundException
    },
    {
      shape: InvalidAutomationStatusUpdateException
    },
    {
      shape: InternalServerError
    }
  ]
};
