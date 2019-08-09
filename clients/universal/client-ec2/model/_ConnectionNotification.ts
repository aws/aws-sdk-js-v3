import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionNotification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionNotificationId: {
      shape: {
        type: "string"
      },
      locationName: "connectionNotificationId"
    },
    ServiceId: {
      shape: {
        type: "string"
      },
      locationName: "serviceId"
    },
    VpcEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "vpcEndpointId"
    },
    ConnectionNotificationType: {
      shape: {
        type: "string"
      },
      locationName: "connectionNotificationType"
    },
    ConnectionNotificationArn: {
      shape: {
        type: "string"
      },
      locationName: "connectionNotificationArn"
    },
    ConnectionEvents: {
      shape: _ValueStringList,
      locationName: "connectionEvents"
    },
    ConnectionNotificationState: {
      shape: {
        type: "string"
      },
      locationName: "connectionNotificationState"
    }
  }
};
