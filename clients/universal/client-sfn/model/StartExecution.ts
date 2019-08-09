import { StartExecutionInput } from "./StartExecutionInput";
import { StartExecutionOutput } from "./StartExecutionOutput";
import { ExecutionLimitExceeded } from "./ExecutionLimitExceeded";
import { ExecutionAlreadyExists } from "./ExecutionAlreadyExists";
import { InvalidArn } from "./InvalidArn";
import { InvalidExecutionInput } from "./InvalidExecutionInput";
import { InvalidName } from "./InvalidName";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
import { StateMachineDeleting } from "./StateMachineDeleting";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
