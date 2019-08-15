import { SetLoggingOptionsInput } from "../shapes/SetLoggingOptionsInput";
import { SetLoggingOptionsOutput } from "../shapes/SetLoggingOptionsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetLoggingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetLoggingOptions",
  http: {
    method: "POST",
    requestUri: "/loggingOptions"
  },
  input: {
    shape: SetLoggingOptionsInput
  },
  output: {
    shape: SetLoggingOptionsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
