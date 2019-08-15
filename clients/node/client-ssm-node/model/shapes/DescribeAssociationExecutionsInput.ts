import { _AssociationExecutionFilterList } from "./_AssociationExecutionFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssociationExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _AssociationExecutionFilterList
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
