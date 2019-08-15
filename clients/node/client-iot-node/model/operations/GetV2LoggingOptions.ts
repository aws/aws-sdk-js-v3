import { GetV2LoggingOptionsInput } from "../shapes/GetV2LoggingOptionsInput";
import { GetV2LoggingOptionsOutput } from "../shapes/GetV2LoggingOptionsOutput";
import { InternalException } from "../shapes/InternalException";
import { NotConfiguredException } from "../shapes/NotConfiguredException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
