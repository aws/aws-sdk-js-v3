import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeGroupMemberUpdateStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeId: {
      shape: {
        type: "string"
      }
    },
    NodeUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    NodeDeletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    NodeUpdateStartDate: {
      shape: {
        type: "timestamp"
      }
    },
    NodeUpdateEndDate: {
      shape: {
        type: "timestamp"
      }
    },
    NodeUpdateInitiatedBy: {
      shape: {
        type: "string"
      }
    },
    NodeUpdateInitiatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    NodeUpdateStatusModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
