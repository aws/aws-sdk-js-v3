import { SetLoggingOptionsInput } from "./SetLoggingOptionsInput";
import { SetLoggingOptionsOutput } from "./SetLoggingOptionsOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
