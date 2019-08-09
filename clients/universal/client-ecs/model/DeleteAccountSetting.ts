import { DeleteAccountSettingInput } from "./DeleteAccountSettingInput";
import { DeleteAccountSettingOutput } from "./DeleteAccountSettingOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAccountSetting: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccountSetting",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAccountSettingInput
  },
  output: {
    shape: DeleteAccountSettingOutput
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
