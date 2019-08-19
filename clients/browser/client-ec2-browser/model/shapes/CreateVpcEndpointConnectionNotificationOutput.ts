import { _ConnectionNotification } from "./_ConnectionNotification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcEndpointConnectionNotificationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionNotification: {
      shape: _ConnectionNotification,
      locationName: "connectionNotification"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    }
  }
};
