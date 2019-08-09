import { PutLifecycleEventHookExecutionStatusInput } from "./PutLifecycleEventHookExecutionStatusInput";
import { PutLifecycleEventHookExecutionStatusOutput } from "./PutLifecycleEventHookExecutionStatusOutput";
import { InvalidLifecycleEventHookExecutionStatusException } from "./InvalidLifecycleEventHookExecutionStatusException";
import { InvalidLifecycleEventHookExecutionIdException } from "./InvalidLifecycleEventHookExecutionIdException";
import { LifecycleEventAlreadyCompletedException } from "./LifecycleEventAlreadyCompletedException";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { UnsupportedActionForDeploymentTypeException } from "./UnsupportedActionForDeploymentTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutLifecycleEventHookExecutionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLifecycleEventHookExecutionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutLifecycleEventHookExecutionStatusInput
  },
  output: {
    shape: PutLifecycleEventHookExecutionStatusOutput
  },
  errors: [
    {
      shape: InvalidLifecycleEventHookExecutionStatusException
    },
    {
      shape: InvalidLifecycleEventHookExecutionIdException
    },
    {
      shape: LifecycleEventAlreadyCompletedException
    },
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: DeploymentDoesNotExistException
    },
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: UnsupportedActionForDeploymentTypeException
    }
  ]
};
