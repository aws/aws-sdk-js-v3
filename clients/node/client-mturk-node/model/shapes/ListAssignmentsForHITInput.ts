import { _AssignmentStatusList } from "./_AssignmentStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssignmentsForHITInput: _Structure_ = {
  type: "structure",
  required: ["HITId"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AssignmentStatuses: {
      shape: _AssignmentStatusList
    }
  }
};
