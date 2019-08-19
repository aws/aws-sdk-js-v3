import { GetHealthCheckLastFailureReasonInput } from "../shapes/GetHealthCheckLastFailureReasonInput";
import { GetHealthCheckLastFailureReasonOutput } from "../shapes/GetHealthCheckLastFailureReasonOutput";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHealthCheckLastFailureReason: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHealthCheckLastFailureReason",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason"
  },
  input: {
    shape: GetHealthCheckLastFailureReasonInput
  },
  output: {
    shape: GetHealthCheckLastFailureReasonOutput
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
