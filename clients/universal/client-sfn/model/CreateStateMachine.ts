import { CreateStateMachineInput } from "./CreateStateMachineInput";
import { CreateStateMachineOutput } from "./CreateStateMachineOutput";
import { InvalidArn } from "./InvalidArn";
import { InvalidDefinition } from "./InvalidDefinition";
import { InvalidName } from "./InvalidName";
import { StateMachineAlreadyExists } from "./StateMachineAlreadyExists";
import { StateMachineDeleting } from "./StateMachineDeleting";
import { StateMachineLimitExceeded } from "./StateMachineLimitExceeded";
import { TooManyTags } from "./TooManyTags";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
