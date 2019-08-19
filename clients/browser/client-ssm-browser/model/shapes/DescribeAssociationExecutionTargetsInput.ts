import { _AssociationExecutionTargetsFilterList } from "./_AssociationExecutionTargetsFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssociationExecutionTargetsInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId", "ExecutionId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    ExecutionId: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _AssociationExecutionTargetsFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
