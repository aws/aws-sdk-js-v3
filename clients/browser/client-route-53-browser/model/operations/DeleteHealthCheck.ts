import { DeleteHealthCheckInput } from "../shapes/DeleteHealthCheckInput";
import { DeleteHealthCheckOutput } from "../shapes/DeleteHealthCheckOutput";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { HealthCheckInUse } from "../shapes/HealthCheckInUse";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
