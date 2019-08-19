import { _SupportedOperationList } from "./_SupportedOperationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaintenanceTrackName: {
      shape: {
        type: "string"
      }
    },
    DatabaseVersion: {
      shape: {
        type: "string"
      }
    },
    SupportedOperations: {
      shape: _SupportedOperationList
    }
  }
};
