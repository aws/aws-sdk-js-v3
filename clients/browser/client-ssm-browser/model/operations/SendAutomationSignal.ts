import { SendAutomationSignalInput } from "../shapes/SendAutomationSignalInput";
import { SendAutomationSignalOutput } from "../shapes/SendAutomationSignalOutput";
import { AutomationExecutionNotFoundException } from "../shapes/AutomationExecutionNotFoundException";
import { AutomationStepNotFoundException } from "../shapes/AutomationStepNotFoundException";
import { InvalidAutomationSignalException } from "../shapes/InvalidAutomationSignalException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendAutomationSignal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendAutomationSignal",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendAutomationSignalInput
  },
  output: {
    shape: SendAutomationSignalOutput
  },
  errors: [
    {
      shape: AutomationExecutionNotFoundException
    },
    {
      shape: AutomationStepNotFoundException
    },
    {
      shape: InvalidAutomationSignalException
    },
    {
      shape: InternalServerError
    }
  ]
};
