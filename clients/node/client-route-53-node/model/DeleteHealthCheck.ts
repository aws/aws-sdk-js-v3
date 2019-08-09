import { DeleteHealthCheckInput } from "./DeleteHealthCheckInput";
import { DeleteHealthCheckOutput } from "./DeleteHealthCheckOutput";
import { NoSuchHealthCheck } from "./NoSuchHealthCheck";
import { HealthCheckInUse } from "./HealthCheckInUse";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteHealthCheck: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHealthCheck",
  http: {
    method: "DELETE",
    requestUri: "/2013-04-01/healthcheck/{HealthCheckId}"
  },
  input: {
    shape: DeleteHealthCheckInput
  },
  output: {
    shape: DeleteHealthCheckOutput
  },
  errors: [
    {
      shape: NoSuchHealthCheck
    },
    {
      shape: HealthCheckInUse
    },
    {
      shape: InvalidInput
    }
  ]
};
