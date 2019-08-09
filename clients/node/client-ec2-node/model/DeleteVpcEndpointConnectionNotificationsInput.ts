import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpcEndpointConnectionNotificationsInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionNotificationIds"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ConnectionNotificationIds: {
      shape: _ValueStringList,
      locationName: "ConnectionNotificationId"
    }
  }
};
