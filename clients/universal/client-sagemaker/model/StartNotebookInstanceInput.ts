import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartNotebookInstanceInput: _Structure_ = {
  type: "structure",
  required: ["NotebookInstanceName"],
  members: {
    NotebookInstanceName: {
      shape: {
        type: "string"
      }
    }
  }
};
