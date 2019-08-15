import { SetSecurityTokenServicePreferencesInput } from "../shapes/SetSecurityTokenServicePreferencesInput";
import { SetSecurityTokenServicePreferencesOutput } from "../shapes/SetSecurityTokenServicePreferencesOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetSecurityTokenServicePreferences: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetSecurityTokenServicePreferences",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetSecurityTokenServicePreferencesInput
  },
  output: {
    shape: SetSecurityTokenServicePreferencesOutput
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
