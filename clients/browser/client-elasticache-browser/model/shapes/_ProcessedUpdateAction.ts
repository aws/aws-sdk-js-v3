import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProcessedUpdateAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateName: {
      shape: {
        type: "string"
      }
    },
    UpdateActionStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
