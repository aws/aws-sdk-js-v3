import { ListExecutionsInput } from "./ListExecutionsInput";
import { ListExecutionsOutput } from "./ListExecutionsOutput";
import { InvalidArn } from "./InvalidArn";
import { InvalidToken } from "./InvalidToken";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListExecutionsInput
  },
  output: {
    shape: ListExecutionsOutput
  },
  errors: [
    {
      shape: InvalidArn
    },
    {
      shape: InvalidToken
    },
    {
      shape: StateMachineDoesNotExist
    }
  ]
};
