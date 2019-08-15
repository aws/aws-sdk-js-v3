import { SetSMBGuestPasswordInput } from "../shapes/SetSMBGuestPasswordInput";
import { SetSMBGuestPasswordOutput } from "../shapes/SetSMBGuestPasswordOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
