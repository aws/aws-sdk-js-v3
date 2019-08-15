import { UpdateHealthCheckInput } from "../shapes/UpdateHealthCheckInput";
import { UpdateHealthCheckOutput } from "../shapes/UpdateHealthCheckOutput";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { InvalidInput } from "../shapes/InvalidInput";
import { HealthCheckVersionMismatch } from "../shapes/HealthCheckVersionMismatch";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateHealthCheck: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateHealthCheck",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/healthcheck/{HealthCheckId}"
  },
  input: {
    shape: UpdateHealthCheckInput,
    locationName: "UpdateHealthCheckRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: UpdateHealthCheckOutput
  },
  errors: [
    {
      shape: NoSuchHealthCheck
    },
    {
      shape: InvalidInput
    },
    {
      shape: HealthCheckVersionMismatch
    }
  ]
};
