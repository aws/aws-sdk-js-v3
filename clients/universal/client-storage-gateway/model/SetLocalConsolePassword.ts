import { SetLocalConsolePasswordInput } from "./SetLocalConsolePasswordInput";
import { SetLocalConsolePasswordOutput } from "./SetLocalConsolePasswordOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetLocalConsolePassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetLocalConsolePassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetLocalConsolePasswordInput
  },
  output: {
    shape: SetLocalConsolePasswordOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
