import { GetAccountSettingsInput } from "./GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "./GetAccountSettingsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAccountSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccountSettingsInput
  },
  output: {
    shape: GetAccountSettingsOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
