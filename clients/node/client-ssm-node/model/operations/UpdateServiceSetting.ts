import { UpdateServiceSettingInput } from "../shapes/UpdateServiceSettingInput";
import { UpdateServiceSettingOutput } from "../shapes/UpdateServiceSettingOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceSettingNotFound } from "../shapes/ServiceSettingNotFound";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
