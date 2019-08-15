import { SetLocalConsolePasswordInput } from "../shapes/SetLocalConsolePasswordInput";
import { SetLocalConsolePasswordOutput } from "../shapes/SetLocalConsolePasswordOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
