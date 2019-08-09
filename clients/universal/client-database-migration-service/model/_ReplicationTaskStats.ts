import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationTaskStats: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FullLoadProgressPercent: {
      shape: {
        type: "integer"
      }
    },
    ElapsedTimeMillis: {
      shape: {
        type: "integer"
      }
    },
    TablesLoaded: {
      shape: {
        type: "integer"
      }
    },
    TablesLoading: {
      shape: {
        type: "integer"
      }
    },
    TablesQueued: {
      shape: {
        type: "integer"
      }
    },
    TablesErrored: {
      shape: {
        type: "integer"
      }
    }
  }
};
