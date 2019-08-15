import { GetAccountSettingsInput } from "../shapes/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "../shapes/GetAccountSettingsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccountSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountSettings",
  http: {
    method: "GET",
    requestUri: "/2016-08-19/account-settings/"
  },
  input: {
    shape: GetAccountSettingsInput
  },
  output: {
    shape: GetAccountSettingsOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: ServiceException
    }
  ]
};
