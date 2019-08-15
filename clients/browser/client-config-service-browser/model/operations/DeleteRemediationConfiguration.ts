import { DeleteRemediationConfigurationInput } from "../shapes/DeleteRemediationConfigurationInput";
import { DeleteRemediationConfigurationOutput } from "../shapes/DeleteRemediationConfigurationOutput";
import { NoSuchRemediationConfigurationException } from "../shapes/NoSuchRemediationConfigurationException";
import { RemediationInProgressException } from "../shapes/RemediationInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
