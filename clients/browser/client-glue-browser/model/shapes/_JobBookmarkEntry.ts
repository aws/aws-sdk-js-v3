import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobBookmarkEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    },
    Run: {
      shape: {
        type: "integer"
      }
    },
    Attempt: {
      shape: {
        type: "integer"
      }
    },
    PreviousRunId: {
      shape: {
        type: "string"
      }
    },
    RunId: {
      shape: {
        type: "string"
      }
    },
    JobBookmark: {
      shape: {
        type: "string"
      }
    }
  }
};
