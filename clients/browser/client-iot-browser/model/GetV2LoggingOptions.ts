import { GetV2LoggingOptionsInput } from "./GetV2LoggingOptionsInput";
import { GetV2LoggingOptionsOutput } from "./GetV2LoggingOptionsOutput";
import { InternalException } from "./InternalException";
import { NotConfiguredException } from "./NotConfiguredException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetV2LoggingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetV2LoggingOptions",
  http: {
    method: "GET",
    requestUri: "/v2LoggingOptions"
  },
  input: {
    shape: GetV2LoggingOptionsInput
  },
  output: {
    shape: GetV2LoggingOptionsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: NotConfiguredException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
