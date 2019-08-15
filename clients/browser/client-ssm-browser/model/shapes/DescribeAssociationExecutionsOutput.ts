import { _AssociationExecutionsList } from "./_AssociationExecutionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssociationExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationExecutions: {
      shape: _AssociationExecutionsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
