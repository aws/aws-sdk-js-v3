import { _WorkflowRunProperties } from "./_WorkflowRunProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWorkflowInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DefaultRunProperties: {
      shape: _WorkflowRunProperties
    }
  }
};
