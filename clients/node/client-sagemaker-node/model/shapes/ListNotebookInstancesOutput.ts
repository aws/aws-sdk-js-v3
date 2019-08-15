import { _NotebookInstanceSummaryList } from "./_NotebookInstanceSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNotebookInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    NotebookInstances: {
      shape: _NotebookInstanceSummaryList
    }
  }
};
