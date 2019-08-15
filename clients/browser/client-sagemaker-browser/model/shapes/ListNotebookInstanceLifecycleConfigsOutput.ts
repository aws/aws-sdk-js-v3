import { _NotebookInstanceLifecycleConfigSummaryList } from "./_NotebookInstanceLifecycleConfigSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNotebookInstanceLifecycleConfigsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceLifecycleConfigs: {
      shape: _NotebookInstanceLifecycleConfigSummaryList
    }
  }
};
