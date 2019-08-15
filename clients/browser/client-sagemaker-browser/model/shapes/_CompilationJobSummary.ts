import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompilationJobSummary: _Structure_ = {
  type: "structure",
  required: [
    "CompilationJobName",
    "CompilationJobArn",
    "CreationTime",
    "CompilationTargetDevice",
    "CompilationJobStatus"
  ],
  members: {
    CompilationJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CompilationJobArn: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompilationStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompilationEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompilationTargetDevice: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompilationJobStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
