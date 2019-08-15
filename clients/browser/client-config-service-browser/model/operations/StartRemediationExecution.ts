import { StartRemediationExecutionInput } from "../shapes/StartRemediationExecutionInput";
import { StartRemediationExecutionOutput } from "../shapes/StartRemediationExecutionOutput";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { NoSuchRemediationConfigurationException } from "../shapes/NoSuchRemediationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
