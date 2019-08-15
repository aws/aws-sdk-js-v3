import { ListExecutionsInput } from "../shapes/ListExecutionsInput";
import { ListExecutionsOutput } from "../shapes/ListExecutionsOutput";
import { InvalidArn } from "../shapes/InvalidArn";
import { InvalidToken } from "../shapes/InvalidToken";
import { StateMachineDoesNotExist } from "../shapes/StateMachineDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
