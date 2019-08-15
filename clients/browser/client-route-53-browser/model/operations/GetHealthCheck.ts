import { GetHealthCheckInput } from "../shapes/GetHealthCheckInput";
import { GetHealthCheckOutput } from "../shapes/GetHealthCheckOutput";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { InvalidInput } from "../shapes/InvalidInput";
import { IncompatibleVersion } from "../shapes/IncompatibleVersion";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHealthCheck: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHealthCheck",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/healthcheck/{HealthCheckId}"
  },
  input: {
    shape: GetHealthCheckInput
  },
  output: {
    shape: GetHealthCheckOutput
  },
  errors: [
    {
      shape: NoSuchHealthCheck
    },
    {
      shape: InvalidInput
    },
    {
      shape: IncompatibleVersion
    }
  ]
};
