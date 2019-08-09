import { SendTaskHeartbeatInput } from "./SendTaskHeartbeatInput";
import { SendTaskHeartbeatOutput } from "./SendTaskHeartbeatOutput";
import { TaskDoesNotExist } from "./TaskDoesNotExist";
import { InvalidToken } from "./InvalidToken";
import { TaskTimedOut } from "./TaskTimedOut";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
