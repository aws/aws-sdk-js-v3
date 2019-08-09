import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcEndpointConnectionNotificationInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionNotificationId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ConnectionNotificationId: {
      shape: {
        type: "string"
      }
    },
    ConnectionNotificationArn: {
      shape: {
        type: "string"
      }
    },
    ConnectionEvents: {
      shape: _ValueStringList
    }
  }
};
