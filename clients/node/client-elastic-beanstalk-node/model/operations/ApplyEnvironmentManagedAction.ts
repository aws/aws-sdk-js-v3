import { ApplyEnvironmentManagedActionInput } from "../shapes/ApplyEnvironmentManagedActionInput";
import { ApplyEnvironmentManagedActionOutput } from "../shapes/ApplyEnvironmentManagedActionOutput";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { ManagedActionInvalidStateException } from "../shapes/ManagedActionInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ApplyEnvironmentManagedAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApplyEnvironmentManagedAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ApplyEnvironmentManagedActionInput
  },
  output: {
    shape: ApplyEnvironmentManagedActionOutput,
    resultWrapper: "ApplyEnvironmentManagedActionResult"
  },
  errors: [
    {
      shape: ElasticBeanstalkServiceException
    },
    {
      shape: ManagedActionInvalidStateException
    }
  ]
};
