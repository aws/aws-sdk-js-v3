import { ListAccountSettingsInput } from "./ListAccountSettingsInput";
import { ListAccountSettingsOutput } from "./ListAccountSettingsOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAccountSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAccountSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAccountSettingsInput
  },
  output: {
    shape: ListAccountSettingsOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
