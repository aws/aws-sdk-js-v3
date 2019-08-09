import { DeleteStateMachineInput } from "./DeleteStateMachineInput";
import { DeleteStateMachineOutput } from "./DeleteStateMachineOutput";
import { InvalidArn } from "./InvalidArn";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteStateMachine: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStateMachine",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStateMachineInput
  },
  output: {
    shape: DeleteStateMachineOutput
  },
  errors: [
    {
      shape: InvalidArn
    }
  ]
};
