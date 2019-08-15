import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotebookInstanceLifecycleConfigInput: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceLifecycleConfigName"],
  members: {
    NotebookInstanceLifecycleConfigName: {
      shape: {
        type: "string"
      }
    }
  }
};
