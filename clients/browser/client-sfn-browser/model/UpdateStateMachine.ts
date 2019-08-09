import { UpdateStateMachineInput } from "./UpdateStateMachineInput";
import { UpdateStateMachineOutput } from "./UpdateStateMachineOutput";
import { InvalidArn } from "./InvalidArn";
import { InvalidDefinition } from "./InvalidDefinition";
import { MissingRequiredParameter } from "./MissingRequiredParameter";
import { StateMachineDeleting } from "./StateMachineDeleting";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
