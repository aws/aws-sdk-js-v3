import { StopAutomationExecutionInput } from "../shapes/StopAutomationExecutionInput";
import { StopAutomationExecutionOutput } from "../shapes/StopAutomationExecutionOutput";
import { AutomationExecutionNotFoundException } from "../shapes/AutomationExecutionNotFoundException";
import { InvalidAutomationStatusUpdateException } from "../shapes/InvalidAutomationStatusUpdateException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
