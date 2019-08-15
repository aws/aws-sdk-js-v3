import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplyPendingMaintenanceActionInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationInstanceArn", "ApplyAction", "OptInType"],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    ApplyAction: {
      shape: {
        type: "string"
      }
    },
    OptInType: {
      shape: {
        type: "string"
      }
    }
  }
};
