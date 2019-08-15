import { GetAutomationExecutionInput } from "../shapes/GetAutomationExecutionInput";
import { GetAutomationExecutionOutput } from "../shapes/GetAutomationExecutionOutput";
import { AutomationExecutionNotFoundException } from "../shapes/AutomationExecutionNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
