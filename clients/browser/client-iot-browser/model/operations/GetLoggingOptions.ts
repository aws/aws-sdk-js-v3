import { GetLoggingOptionsInput } from "../shapes/GetLoggingOptionsInput";
import { GetLoggingOptionsOutput } from "../shapes/GetLoggingOptionsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLoggingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLoggingOptions",
  http: {
    method: "GET",
    requestUri: "/loggingOptions"
  },
  input: {
    shape: GetLoggingOptionsInput
  },
  output: {
    shape: GetLoggingOptionsOutput
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
