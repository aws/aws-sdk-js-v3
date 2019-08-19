import { PutAccountSettingDefaultInput } from "../shapes/PutAccountSettingDefaultInput";
import { PutAccountSettingDefaultOutput } from "../shapes/PutAccountSettingDefaultOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
