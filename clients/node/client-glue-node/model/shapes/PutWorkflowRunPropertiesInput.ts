import { _WorkflowRunProperties } from "./_WorkflowRunProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutWorkflowRunPropertiesInput: _Structure_ = {
  type: "structure",
  required: ["Name", "RunId", "RunProperties"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunProperties: {
      shape: _WorkflowRunProperties
    }
  }
};
