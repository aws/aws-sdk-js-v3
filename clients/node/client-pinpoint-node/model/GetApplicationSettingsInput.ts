import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApplicationSettingsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    }
  }
};
