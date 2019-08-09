import { _WorkflowRunProperties } from "./_WorkflowRunProperties";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWorkflowInput: _Structure_ = {
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
    },
    Tags: {
      shape: _TagsMap
    }
  }
};
