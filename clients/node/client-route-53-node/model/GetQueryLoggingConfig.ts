import { GetQueryLoggingConfigInput } from "./GetQueryLoggingConfigInput";
import { GetQueryLoggingConfigOutput } from "./GetQueryLoggingConfigOutput";
import { NoSuchQueryLoggingConfig } from "./NoSuchQueryLoggingConfig";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetQueryLoggingConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetQueryLoggingConfig",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/queryloggingconfig/{Id}"
  },
  input: {
    shape: GetQueryLoggingConfigInput
  },
  output: {
    shape: GetQueryLoggingConfigOutput
  },
  errors: [
    {
      shape: NoSuchQueryLoggingConfig
    },
    {
      shape: InvalidInput
    }
  ]
};
