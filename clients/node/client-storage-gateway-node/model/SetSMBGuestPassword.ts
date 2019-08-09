import { SetSMBGuestPasswordInput } from "./SetSMBGuestPasswordInput";
import { SetSMBGuestPasswordOutput } from "./SetSMBGuestPasswordOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetSMBGuestPassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetSMBGuestPassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetSMBGuestPasswordInput
  },
  output: {
    shape: SetSMBGuestPasswordOutput
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
