import { StartExecutionInput } from "../shapes/StartExecutionInput";
import { StartExecutionOutput } from "../shapes/StartExecutionOutput";
import { ExecutionLimitExceeded } from "../shapes/ExecutionLimitExceeded";
import { ExecutionAlreadyExists } from "../shapes/ExecutionAlreadyExists";
import { InvalidArn } from "../shapes/InvalidArn";
import { InvalidExecutionInput } from "../shapes/InvalidExecutionInput";
import { InvalidName } from "../shapes/InvalidName";
import { StateMachineDoesNotExist } from "../shapes/StateMachineDoesNotExist";
import { StateMachineDeleting } from "../shapes/StateMachineDeleting";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartExecutionInput
  },
  output: {
    shape: StartExecutionOutput
  },
  errors: [
    {
      shape: ExecutionLimitExceeded
    },
    {
      shape: ExecutionAlreadyExists
    },
    {
      shape: InvalidArn
    },
    {
      shape: InvalidExecutionInput
    },
    {
      shape: InvalidName
    },
    {
      shape: StateMachineDoesNotExist
    },
    {
      shape: StateMachineDeleting
    }
  ]
};
