import { PutAccountSettingInput } from "../shapes/PutAccountSettingInput";
import { PutAccountSettingOutput } from "../shapes/PutAccountSettingOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
