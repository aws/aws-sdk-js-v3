import { GetAccountSettingsInput } from "../shapes/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "../shapes/GetAccountSettingsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
