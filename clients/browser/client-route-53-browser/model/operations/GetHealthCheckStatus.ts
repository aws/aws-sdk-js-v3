import { GetHealthCheckStatusInput } from "../shapes/GetHealthCheckStatusInput";
import { GetHealthCheckStatusOutput } from "../shapes/GetHealthCheckStatusOutput";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHealthCheckStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHealthCheckStatus",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/healthcheck/{HealthCheckId}/status"
  },
  input: {
    shape: GetHealthCheckStatusInput
  },
  output: {
    shape: GetHealthCheckStatusOutput
  },
  errors: [
    {
      shape: NoSuchHealthCheck
    },
    {
      shape: InvalidInput
    }
  ]
};
