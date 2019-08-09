import { _AssociationIdList } from "./_AssociationIdList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIamInstanceProfileAssociationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationIds: {
      shape: _AssociationIdList,
      locationName: "AssociationId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
