import { StartAutomationExecutionInput } from "../shapes/StartAutomationExecutionInput";
import { StartAutomationExecutionOutput } from "../shapes/StartAutomationExecutionOutput";
import { AutomationDefinitionNotFoundException } from "../shapes/AutomationDefinitionNotFoundException";
import { InvalidAutomationExecutionParametersException } from "../shapes/InvalidAutomationExecutionParametersException";
import { AutomationExecutionLimitExceededException } from "../shapes/AutomationExecutionLimitExceededException";
import { AutomationDefinitionVersionNotFoundException } from "../shapes/AutomationDefinitionVersionNotFoundException";
import { IdempotentParameterMismatch } from "../shapes/IdempotentParameterMismatch";
import { InvalidTarget } from "../shapes/InvalidTarget";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
