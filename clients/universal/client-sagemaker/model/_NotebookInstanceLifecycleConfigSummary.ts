import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotebookInstanceLifecycleConfigSummary: _Structure_ = {
  type: "structure",
  required: [
    "NotebookInstanceLifecycleConfigName",
    "NotebookInstanceLifecycleConfigArn"
  ],
  members: {
    NotebookInstanceLifecycleConfigName: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceLifecycleConfigArn: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
