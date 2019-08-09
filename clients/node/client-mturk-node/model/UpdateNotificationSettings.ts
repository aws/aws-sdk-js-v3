import { UpdateNotificationSettingsInput } from "./UpdateNotificationSettingsInput";
import { UpdateNotificationSettingsOutput } from "./UpdateNotificationSettingsOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateNotificationSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNotificationSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNotificationSettingsInput
  },
  output: {
    shape: UpdateNotificationSettingsOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};
