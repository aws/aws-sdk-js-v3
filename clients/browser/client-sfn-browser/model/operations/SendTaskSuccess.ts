import { SendTaskSuccessInput } from "../shapes/SendTaskSuccessInput";
import { SendTaskSuccessOutput } from "../shapes/SendTaskSuccessOutput";
import { TaskDoesNotExist } from "../shapes/TaskDoesNotExist";
import { InvalidOutput } from "../shapes/InvalidOutput";
import { InvalidToken } from "../shapes/InvalidToken";
import { TaskTimedOut } from "../shapes/TaskTimedOut";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendTaskSuccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendTaskSuccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendTaskSuccessInput
  },
  output: {
    shape: SendTaskSuccessOutput
  },
  errors: [
    {
      shape: TaskDoesNotExist
    },
    {
      shape: InvalidOutput
    },
    {
      shape: InvalidToken
    },
    {
      shape: TaskTimedOut
    }
  ]
};
