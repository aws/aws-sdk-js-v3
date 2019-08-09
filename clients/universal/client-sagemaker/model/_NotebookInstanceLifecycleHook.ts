import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotebookInstanceLifecycleHook: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
