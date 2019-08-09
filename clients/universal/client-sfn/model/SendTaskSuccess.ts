import { SendTaskSuccessInput } from "./SendTaskSuccessInput";
import { SendTaskSuccessOutput } from "./SendTaskSuccessOutput";
import { TaskDoesNotExist } from "./TaskDoesNotExist";
import { InvalidOutput } from "./InvalidOutput";
import { InvalidToken } from "./InvalidToken";
import { TaskTimedOut } from "./TaskTimedOut";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
