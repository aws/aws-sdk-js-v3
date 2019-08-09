import { ResetServiceSettingInput } from "./ResetServiceSettingInput";
import { ResetServiceSettingOutput } from "./ResetServiceSettingOutput";
import { InternalServerError } from "./InternalServerError";
import { ServiceSettingNotFound } from "./ServiceSettingNotFound";
import { TooManyUpdates } from "./TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetServiceSetting: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetServiceSetting",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetServiceSettingInput
  },
  output: {
    shape: ResetServiceSettingOutput
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
