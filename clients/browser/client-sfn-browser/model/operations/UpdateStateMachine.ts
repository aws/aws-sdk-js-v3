import { UpdateStateMachineInput } from "../shapes/UpdateStateMachineInput";
import { UpdateStateMachineOutput } from "../shapes/UpdateStateMachineOutput";
import { InvalidArn } from "../shapes/InvalidArn";
import { InvalidDefinition } from "../shapes/InvalidDefinition";
import { MissingRequiredParameter } from "../shapes/MissingRequiredParameter";
import { StateMachineDeleting } from "../shapes/StateMachineDeleting";
import { StateMachineDoesNotExist } from "../shapes/StateMachineDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStateMachine: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStateMachine",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateStateMachineInput
  },
  output: {
    shape: UpdateStateMachineOutput
  },
  errors: [
    {
      shape: InvalidArn
    },
    {
      shape: InvalidDefinition
    },
    {
      shape: MissingRequiredParameter
    },
    {
      shape: StateMachineDeleting
    },
    {
      shape: StateMachineDoesNotExist
    }
  ]
};
