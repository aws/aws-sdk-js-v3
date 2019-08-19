import { SetV2LoggingOptionsInput } from "../shapes/SetV2LoggingOptionsInput";
import { SetV2LoggingOptionsOutput } from "../shapes/SetV2LoggingOptionsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetV2LoggingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetV2LoggingOptions",
  http: {
    method: "POST",
    requestUri: "/v2LoggingOptions"
  },
  input: {
    shape: SetV2LoggingOptionsInput
  },
  output: {
    shape: SetV2LoggingOptionsOutput
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
