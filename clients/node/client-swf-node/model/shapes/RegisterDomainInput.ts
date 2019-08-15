import { _ResourceTagList } from "./_ResourceTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterDomainInput: _Structure_ = {
  type: "structure",
  required: ["name", "workflowExecutionRetentionPeriodInDays"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    workflowExecutionRetentionPeriodInDays: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _ResourceTagList
    }
  }
};
