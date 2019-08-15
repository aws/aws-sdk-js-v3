import { _WorkflowType } from "./_WorkflowType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowTypeInfo: _Structure_ = {
  type: "structure",
  required: ["workflowType", "status", "creationDate"],
  members: {
    workflowType: {
      shape: _WorkflowType
    },
    status: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    deprecationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
