import { PutRemediationConfigurationsInput } from "./PutRemediationConfigurationsInput";
import { PutRemediationConfigurationsOutput } from "./PutRemediationConfigurationsOutput";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutRemediationConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRemediationConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRemediationConfigurationsInput
  },
  output: {
    shape: PutRemediationConfigurationsOutput
  },
  errors: [
    {
      shape: InsufficientPermissionsException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
