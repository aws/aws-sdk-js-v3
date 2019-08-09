import { SendAutomationSignalInput } from "./SendAutomationSignalInput";
import { SendAutomationSignalOutput } from "./SendAutomationSignalOutput";
import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { AutomationStepNotFoundException } from "./AutomationStepNotFoundException";
import { InvalidAutomationSignalException } from "./InvalidAutomationSignalException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
