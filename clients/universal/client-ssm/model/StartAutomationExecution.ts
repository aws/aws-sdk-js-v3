import { StartAutomationExecutionInput } from "./StartAutomationExecutionInput";
import { StartAutomationExecutionOutput } from "./StartAutomationExecutionOutput";
import { AutomationDefinitionNotFoundException } from "./AutomationDefinitionNotFoundException";
import { InvalidAutomationExecutionParametersException } from "./InvalidAutomationExecutionParametersException";
import { AutomationExecutionLimitExceededException } from "./AutomationExecutionLimitExceededException";
import { AutomationDefinitionVersionNotFoundException } from "./AutomationDefinitionVersionNotFoundException";
import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { InvalidTarget } from "./InvalidTarget";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartAutomationExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartAutomationExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartAutomationExecutionInput
  },
  output: {
    shape: StartAutomationExecutionOutput
  },
  errors: [
    {
      shape: AutomationDefinitionNotFoundException
    },
    {
      shape: InvalidAutomationExecutionParametersException
    },
    {
      shape: AutomationExecutionLimitExceededException
    },
    {
      shape: AutomationDefinitionVersionNotFoundException
    },
    {
      shape: IdempotentParameterMismatch
    },
    {
      shape: InvalidTarget
    },
    {
      shape: InternalServerError
    }
  ]
};
