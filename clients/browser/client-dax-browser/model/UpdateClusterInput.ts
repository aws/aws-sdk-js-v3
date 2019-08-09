import { _SecurityGroupIdentifierList } from "./_SecurityGroupIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterName"],
  members: {
    ClusterName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    NotificationTopicArn: {
      shape: {
        type: "string"
      }
    },
    NotificationTopicStatus: {
      shape: {
        type: "string"
      }
    },
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdentifierList
    }
  }
};
