import { StartRemediationExecutionInput } from "./StartRemediationExecutionInput";
import { StartRemediationExecutionOutput } from "./StartRemediationExecutionOutput";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { NoSuchRemediationConfigurationException } from "./NoSuchRemediationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartRemediationExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartRemediationExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartRemediationExecutionInput
  },
  output: {
    shape: StartRemediationExecutionOutput
  },
  errors: [
    {
      shape: InsufficientPermissionsException
    },
    {
      shape: NoSuchRemediationConfigurationException
    }
  ]
};
