import { _Workflow } from "./_Workflow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Workflow: {
      shape: _Workflow
    }
  }
};
