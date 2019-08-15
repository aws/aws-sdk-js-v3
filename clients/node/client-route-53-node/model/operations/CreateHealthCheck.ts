import { CreateHealthCheckInput } from "../shapes/CreateHealthCheckInput";
import { CreateHealthCheckOutput } from "../shapes/CreateHealthCheckOutput";
import { TooManyHealthChecks } from "../shapes/TooManyHealthChecks";
import { HealthCheckAlreadyExists } from "../shapes/HealthCheckAlreadyExists";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateHealthCheck: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateHealthCheck",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/healthcheck"
  },
  input: {
    shape: CreateHealthCheckInput,
    locationName: "CreateHealthCheckRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: CreateHealthCheckOutput
  },
  errors: [
    {
      shape: TooManyHealthChecks
    },
    {
      shape: HealthCheckAlreadyExists
    },
    {
      shape: InvalidInput
    }
  ]
};
