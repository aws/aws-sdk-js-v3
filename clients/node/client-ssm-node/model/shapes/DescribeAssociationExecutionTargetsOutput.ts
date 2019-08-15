import { _AssociationExecutionTargetsList } from "./_AssociationExecutionTargetsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssociationExecutionTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationExecutionTargets: {
      shape: _AssociationExecutionTargetsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
