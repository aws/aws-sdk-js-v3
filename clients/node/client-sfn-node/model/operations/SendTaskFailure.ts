import { SendTaskFailureInput } from "../shapes/SendTaskFailureInput";
import { SendTaskFailureOutput } from "../shapes/SendTaskFailureOutput";
import { TaskDoesNotExist } from "../shapes/TaskDoesNotExist";
import { InvalidToken } from "../shapes/InvalidToken";
import { TaskTimedOut } from "../shapes/TaskTimedOut";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendTaskFailure: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendTaskFailure",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendTaskFailureInput
  },
  output: {
    shape: SendTaskFailureOutput
  },
  errors: [
    {
      shape: TaskDoesNotExist
    },
    {
      shape: InvalidToken
    },
    {
      shape: TaskTimedOut
    }
  ]
};
