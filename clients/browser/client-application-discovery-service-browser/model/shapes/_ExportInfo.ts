import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportInfo: _Structure_ = {
  type: "structure",
  required: ["exportId", "exportStatus", "statusMessage", "exportRequestTime"],
  members: {
    exportId: {
      shape: {
        type: "string"
      }
    },
    exportStatus: {
      shape: {
        type: "string"
      }
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    },
    configurationsDownloadUrl: {
      shape: {
        type: "string"
      }
    },
    exportRequestTime: {
      shape: {
        type: "timestamp"
      }
    },
    isTruncated: {
      shape: {
        type: "boolean"
      }
    },
    requestedStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    requestedEndTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
