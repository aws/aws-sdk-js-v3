import { SendTaskHeartbeatInput } from "../shapes/SendTaskHeartbeatInput";
import { SendTaskHeartbeatOutput } from "../shapes/SendTaskHeartbeatOutput";
import { TaskDoesNotExist } from "../shapes/TaskDoesNotExist";
import { InvalidToken } from "../shapes/InvalidToken";
import { TaskTimedOut } from "../shapes/TaskTimedOut";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendTaskHeartbeat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendTaskHeartbeat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendTaskHeartbeatInput
  },
  output: {
    shape: SendTaskHeartbeatOutput
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
