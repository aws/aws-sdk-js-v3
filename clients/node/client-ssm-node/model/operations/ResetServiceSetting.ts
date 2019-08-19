import { ResetServiceSettingInput } from "../shapes/ResetServiceSettingInput";
import { ResetServiceSettingOutput } from "../shapes/ResetServiceSettingOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceSettingNotFound } from "../shapes/ServiceSettingNotFound";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
