import { UpdateServiceSettingInput } from "./UpdateServiceSettingInput";
import { UpdateServiceSettingOutput } from "./UpdateServiceSettingOutput";
import { InternalServerError } from "./InternalServerError";
import { ServiceSettingNotFound } from "./ServiceSettingNotFound";
import { TooManyUpdates } from "./TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateServiceSetting: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServiceSetting",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceSettingInput
  },
  output: {
    shape: UpdateServiceSettingOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: ServiceSettingNotFound
    },
    {
      shape: TooManyUpdates
    }
  ]
};
