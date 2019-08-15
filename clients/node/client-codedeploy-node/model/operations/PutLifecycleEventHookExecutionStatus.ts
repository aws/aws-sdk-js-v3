import { PutLifecycleEventHookExecutionStatusInput } from "../shapes/PutLifecycleEventHookExecutionStatusInput";
import { PutLifecycleEventHookExecutionStatusOutput } from "../shapes/PutLifecycleEventHookExecutionStatusOutput";
import { InvalidLifecycleEventHookExecutionStatusException } from "../shapes/InvalidLifecycleEventHookExecutionStatusException";
import { InvalidLifecycleEventHookExecutionIdException } from "../shapes/InvalidLifecycleEventHookExecutionIdException";
import { LifecycleEventAlreadyCompletedException } from "../shapes/LifecycleEventAlreadyCompletedException";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { UnsupportedActionForDeploymentTypeException } from "../shapes/UnsupportedActionForDeploymentTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
