import { PutAccountSettingInput } from "./PutAccountSettingInput";
import { PutAccountSettingOutput } from "./PutAccountSettingOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutAccountSetting: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAccountSetting",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAccountSettingInput
  },
  output: {
    shape: PutAccountSettingOutput
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
