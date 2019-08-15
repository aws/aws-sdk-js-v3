import { _InstanceAssociationList } from "./_InstanceAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEffectiveInstanceAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Associations: {
      shape: _InstanceAssociationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
