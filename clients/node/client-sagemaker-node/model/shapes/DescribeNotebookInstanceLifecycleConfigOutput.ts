import { _NotebookInstanceLifecycleConfigList } from "./_NotebookInstanceLifecycleConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotebookInstanceLifecycleConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NotebookInstanceLifecycleConfigArn: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceLifecycleConfigName: {
      shape: {
        type: "string"
      }
    },
    OnCreate: {
      shape: _NotebookInstanceLifecycleConfigList
    },
    OnStart: {
      shape: _NotebookInstanceLifecycleConfigList
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
