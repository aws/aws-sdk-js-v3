import { SetSecurityTokenServicePreferencesInput } from "./SetSecurityTokenServicePreferencesInput";
import { SetSecurityTokenServicePreferencesOutput } from "./SetSecurityTokenServicePreferencesOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
