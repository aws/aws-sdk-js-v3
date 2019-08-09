import { GetLoggingOptionsInput } from "./GetLoggingOptionsInput";
import { GetLoggingOptionsOutput } from "./GetLoggingOptionsOutput";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
