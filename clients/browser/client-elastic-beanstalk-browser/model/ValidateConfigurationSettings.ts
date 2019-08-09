import { ValidateConfigurationSettingsInput } from "./ValidateConfigurationSettingsInput";
import { ValidateConfigurationSettingsOutput } from "./ValidateConfigurationSettingsOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ValidateConfigurationSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ValidateConfigurationSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ValidateConfigurationSettingsInput
  },
  output: {
    shape: ValidateConfigurationSettingsOutput,
    resultWrapper: "ValidateConfigurationSettingsResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: TooManyBucketsException
    }
  ]
};
