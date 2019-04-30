import { _WriteApplicationSettingsRequest } from "./_WriteApplicationSettingsRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationSettingsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "WriteApplicationSettingsRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    WriteApplicationSettingsRequest: {
      shape: _WriteApplicationSettingsRequest
    }
  },
  payload: "WriteApplicationSettingsRequest"
};
