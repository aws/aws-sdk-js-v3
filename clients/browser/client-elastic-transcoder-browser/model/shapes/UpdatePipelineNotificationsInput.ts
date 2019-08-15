import { _Notifications } from "./_Notifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePipelineNotificationsInput: _Structure_ = {
  type: "structure",
  required: ["Id", "Notifications"],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    Notifications: {
      shape: _Notifications
    }
  }
};
