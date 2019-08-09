import { GetServiceSettingInput } from "./GetServiceSettingInput";
import { GetServiceSettingOutput } from "./GetServiceSettingOutput";
import { InternalServerError } from "./InternalServerError";
import { ServiceSettingNotFound } from "./ServiceSettingNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceSetting: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceSetting",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceSettingInput
  },
  output: {
    shape: GetServiceSettingOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: ServiceSettingNotFound
    }
  ]
};
