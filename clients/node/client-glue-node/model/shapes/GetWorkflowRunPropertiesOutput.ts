import { _WorkflowRunProperties } from "./_WorkflowRunProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowRunPropertiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RunProperties: {
      shape: _WorkflowRunProperties
    }
  }
};
