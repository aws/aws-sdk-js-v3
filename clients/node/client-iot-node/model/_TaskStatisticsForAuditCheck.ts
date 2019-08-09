import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskStatisticsForAuditCheck: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    totalFindingsCount: {
      shape: {
        type: "integer"
      }
    },
    failedFindingsCount: {
      shape: {
        type: "integer"
      }
    },
    succeededFindingsCount: {
      shape: {
        type: "integer"
      }
    },
    skippedFindingsCount: {
      shape: {
        type: "integer"
      }
    },
    canceledFindingsCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
