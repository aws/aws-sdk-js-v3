import { ConfigureHealthCheckInput } from "./ConfigureHealthCheckInput";
import { ConfigureHealthCheckOutput } from "./ConfigureHealthCheckOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ConfigureHealthCheck: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfigureHealthCheck",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfigureHealthCheckInput
  },
  output: {
    shape: ConfigureHealthCheckOutput,
    resultWrapper: "ConfigureHealthCheckResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    }
  ]
};
