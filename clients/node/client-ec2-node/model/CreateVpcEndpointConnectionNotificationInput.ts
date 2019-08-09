import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcEndpointConnectionNotificationInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionNotificationArn", "ConnectionEvents"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    VpcEndpointId: {
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
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
