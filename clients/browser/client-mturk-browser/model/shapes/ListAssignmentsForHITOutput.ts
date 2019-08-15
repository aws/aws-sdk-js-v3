import { _AssignmentList } from "./_AssignmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssignmentsForHITOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumResults: {
      shape: {
        type: "integer"
      }
    },
    Assignments: {
      shape: _AssignmentList
    }
  }
};
