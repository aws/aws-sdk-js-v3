import { PutRemediationConfigurationsInput } from "../shapes/PutRemediationConfigurationsInput";
import { PutRemediationConfigurationsOutput } from "../shapes/PutRemediationConfigurationsOutput";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
