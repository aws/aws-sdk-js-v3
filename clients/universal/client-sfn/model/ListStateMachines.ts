import { ListStateMachinesInput } from "./ListStateMachinesInput";
import { ListStateMachinesOutput } from "./ListStateMachinesOutput";
import { InvalidToken } from "./InvalidToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListStateMachines: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStateMachines",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStateMachinesInput
  },
  output: {
    shape: ListStateMachinesOutput
  },
  errors: [
    {
      shape: InvalidToken
    }
  ]
};
