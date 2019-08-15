import { _UserStackAssociationList } from "./_UserStackAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserStackAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserStackAssociations: {
      shape: _UserStackAssociationList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
