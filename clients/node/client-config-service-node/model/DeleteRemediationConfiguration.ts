import { DeleteRemediationConfigurationInput } from "./DeleteRemediationConfigurationInput";
import { DeleteRemediationConfigurationOutput } from "./DeleteRemediationConfigurationOutput";
import { NoSuchRemediationConfigurationException } from "./NoSuchRemediationConfigurationException";
import { RemediationInProgressException } from "./RemediationInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRemediationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRemediationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRemediationConfigurationInput
  },
  output: {
    shape: DeleteRemediationConfigurationOutput
  },
  errors: [
    {
      shape: NoSuchRemediationConfigurationException
    },
    {
      shape: RemediationInProgressException
    }
  ]
};
