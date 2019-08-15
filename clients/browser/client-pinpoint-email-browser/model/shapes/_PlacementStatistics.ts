import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacementStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InboxPercentage: {
      shape: {
        type: "float"
      }
    },
    SpamPercentage: {
      shape: {
        type: "float"
      }
    },
    MissingPercentage: {
      shape: {
        type: "float"
      }
    },
    SpfPercentage: {
      shape: {
        type: "float"
      }
    },
    DkimPercentage: {
      shape: {
        type: "float"
      }
    }
  }
};
