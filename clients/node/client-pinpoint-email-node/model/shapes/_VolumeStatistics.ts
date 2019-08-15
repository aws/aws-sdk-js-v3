import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InboxRawCount: {
      shape: {
        type: "integer"
      }
    },
    SpamRawCount: {
      shape: {
        type: "integer"
      }
    },
    ProjectedInbox: {
      shape: {
        type: "integer"
      }
    },
    ProjectedSpam: {
      shape: {
        type: "integer"
      }
    }
  }
};
