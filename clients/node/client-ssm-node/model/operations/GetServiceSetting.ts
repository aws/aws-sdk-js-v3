import { GetServiceSettingInput } from "../shapes/GetServiceSettingInput";
import { GetServiceSettingOutput } from "../shapes/GetServiceSettingOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceSettingNotFound } from "../shapes/ServiceSettingNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
