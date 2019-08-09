import { GetAutomationExecutionInput } from "./GetAutomationExecutionInput";
import { GetAutomationExecutionOutput } from "./GetAutomationExecutionOutput";
import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAutomationExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAutomationExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAutomationExecutionInput
  },
  output: {
    shape: GetAutomationExecutionOutput
  },
  errors: [
    {
      shape: AutomationExecutionNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
