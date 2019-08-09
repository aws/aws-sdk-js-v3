import { SendTaskFailureInput } from "./SendTaskFailureInput";
import { SendTaskFailureOutput } from "./SendTaskFailureOutput";
import { TaskDoesNotExist } from "./TaskDoesNotExist";
import { InvalidToken } from "./InvalidToken";
import { TaskTimedOut } from "./TaskTimedOut";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
