import { CreateStateMachineInput } from "../shapes/CreateStateMachineInput";
import { CreateStateMachineOutput } from "../shapes/CreateStateMachineOutput";
import { InvalidArn } from "../shapes/InvalidArn";
import { InvalidDefinition } from "../shapes/InvalidDefinition";
import { InvalidName } from "../shapes/InvalidName";
import { StateMachineAlreadyExists } from "../shapes/StateMachineAlreadyExists";
import { StateMachineDeleting } from "../shapes/StateMachineDeleting";
import { StateMachineLimitExceeded } from "../shapes/StateMachineLimitExceeded";
import { TooManyTags } from "../shapes/TooManyTags";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStateMachine: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStateMachine",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStateMachineInput
  },
  output: {
    shape: CreateStateMachineOutput
  },
  errors: [
    {
      shape: InvalidArn
    },
    {
      shape: InvalidDefinition
    },
    {
      shape: InvalidName
    },
    {
      shape: StateMachineAlreadyExists
    },
    {
      shape: StateMachineDeleting
    },
    {
      shape: StateMachineLimitExceeded
    },
    {
      shape: TooManyTags
    }
  ]
};
