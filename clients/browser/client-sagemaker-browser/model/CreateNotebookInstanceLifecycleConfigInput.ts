import { _NotebookInstanceLifecycleConfigList } from "./_NotebookInstanceLifecycleConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNotebookInstanceLifecycleConfigInput: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceLifecycleConfigName"],
  members: {
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
    }
  }
};
