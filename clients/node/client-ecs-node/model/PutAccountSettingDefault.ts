import { PutAccountSettingDefaultInput } from "./PutAccountSettingDefaultInput";
import { PutAccountSettingDefaultOutput } from "./PutAccountSettingDefaultOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutAccountSettingDefault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAccountSettingDefault",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAccountSettingDefaultInput
  },
  output: {
    shape: PutAccountSettingDefaultOutput
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
